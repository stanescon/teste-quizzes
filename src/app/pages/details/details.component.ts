import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from './../service/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id = ''
  title = ''
  description = ''
  options: any[] = []
  messageAnswer = ''
  answer: boolean | undefined
  color = ''


  constructor(
    private router: ActivatedRoute,
    private quizService: QuizService,
    private router2: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.quizService.detailsQuiz(this.id).subscribe((response: any) => {
      console.log(response)
      this.title = response.quiz.title;
      this.description = response.quiz.description;
      this.options = response.quiz.options

      console.log(this.options)
    })
  }

  back(){
    this.router2.navigate(['home'])
  }

  inputValue(option: any){
    this.answer = option
  }

  showAnswer(){
    if(this.answer == true){
      this.messageAnswer = 'Você acertou!'
    } else {
      this.messageAnswer = 'Você errou. Tente novamente.'
    }
  }

}
