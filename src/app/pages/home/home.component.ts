import { QuizService } from './../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizzes: any[] = []

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((response: any) =>{
      this.quizzes = response.quizzes
      console.log(this.quizzes)
    })
  }

  newQuiz(){
    this.router.navigate(['new-quiz'])
  }

}
