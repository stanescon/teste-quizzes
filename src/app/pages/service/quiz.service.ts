import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  api = environment.api
  headers: HttpHeaders
  user
  constructor(
    private http: HttpClient,
  ) {
    const token = localStorage.getItem('token') ?? ''
    this.headers = new HttpHeaders({'x-api-key': token})
    this.user = JSON.parse(localStorage.getItem('user') ?? '')
  }

  getQuizzes(){
    const httpParams = new HttpParams().set('fields', 'name,description,level,rewardXp,type').set('filter', `team:${this.user.teams[0]._id}`)
    return this.http.get(this.api + 'quizzes', {headers: this.headers, params:httpParams})
  }

  deletQuiz(id: string){
    return this.http.delete(this.api + 'quizzes/' + id, {headers: this.headers})
  }

  newQuiz(send: any){
    return this.http.post(this.api + 'quizzes', send, {headers: this.headers})
  }

  editQuiz(send: any){
    return this.http.put(this.api + 'quizzes', send, {headers: this.headers})
  }

  detailsQuiz(id: string){
    return this.http.get(this.api + 'quizzes/' + id, {headers: this.headers})
  }

}
