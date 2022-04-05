import { QuizService } from './../service/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {

  id = ''
  detailsQuiz: any | undefined

  constructor(
    private router: Router,
    private quizService: QuizService,
    private router2: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router2.snapshot.params['id'];
    console.log(this.id)

    this.quizService.detailsQuiz(this.id).subscribe((response: any) => {
      this.detailsQuiz = response.quiz
      console.log(this.detailsQuiz)
    })
  }

  back(){
    this.router.navigate(['home'])
  }
}
