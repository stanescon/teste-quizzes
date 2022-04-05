import { Router } from '@angular/router';
import { QuizService } from './../../pages/service/quiz.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-quiz',
  templateUrl: './card-quiz.component.html',
  styleUrls: ['./card-quiz.component.css']
})
export class CardQuizComponent implements OnInit {


  @Input() description = ''
  @Input() level = ''
  @Input() id = ''

  constructor(
    private router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {

  }

  moreInfo(){
    this.router.navigate(['details', this.id])
  }

  edit(){
    this.router.navigate(['edit-quiz', this.id])
  }

  delet(){
    this.quizService.deletQuiz(this.id).subscribe((response: any) => {
      location.reload()
    });
  }

}
