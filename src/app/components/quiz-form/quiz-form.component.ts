import { Router } from '@angular/router';
import { QuizService } from '../../pages/service/quiz.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  @Input() detailsQuiz: any

  messageError = ''
  formOptions: FormGroup = this.formBuilder.group({
    option1: ['', [Validators.required]],
    radio1: ['', [Validators.required]],
    option2: ['', [Validators.required]],
    radio2: ['', [Validators.required]],
    option3: ['', [Validators.required]],
    radio3: ['', [Validators.required]],
  })
  formQuiz: FormGroup = this.formBuilder.group({
    team: ['623497e07ccb72a54717b9f4'],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    level: ['EASY', [Validators.required]],
    type: ['MULTIPLE_CHOICE_ONE'],
    rewardXP: ['', [Validators.required]],

  })

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService,
    private router: Router

  ) { }

  ngOnInit(): void {
    if(this.detailsQuiz){
      this.fillForm()
    }
  }

  fillForm(){
    this.formQuiz.get('title')?.setValue(this.detailsQuiz.title);
      this.formQuiz.get('description')?.setValue(this.detailsQuiz.description);
      this.formQuiz.get('level')?.setValue(this.detailsQuiz.level)
      this.formQuiz.get('rewardXP')?.setValue(10)
      this.formOptions.get('option1')?.setValue(this.detailsQuiz.options[0].text)
      this.formOptions.get('option2')?.setValue(this.detailsQuiz.options[1].text)
      this.formOptions.get('option3')?.setValue(this.detailsQuiz.options[2].text)
      this.formOptions.get('radio1')?.setValue(this.detailsQuiz.options[0].correct == true ? 'true' : 'false')
      this.formOptions.get('radio2')?.setValue(this.detailsQuiz.options[1].correct == true ? 'true' : 'false')
      this.formOptions.get('radio3')?.setValue(this.detailsQuiz.options[2].correct == true ? 'true' : 'false')
  }

  save(){
    const send = this.formQuiz.value
    send.options = [{
      correct: this.formOptions.value.radio1 == 'true' ? true : false,
      text: this.formOptions.value.option1
    },{
      correct: this.formOptions.value.radio2 == 'true' ? true : false,
      text: this.formOptions.value.option2
    },{
      correct: this.formOptions.value.radio3 == 'true' ? true : false,
      text: this.formOptions.value.option3
    }]
    console.log(send)
    const arr = send.options.filter((option: any) => option.correct == true)
    console.log(arr)
    if(arr.length == 1){
      this.messageError = ''
      if(this.detailsQuiz){
        send._id = this.detailsQuiz._id;
        this.quizService.editQuiz(send).subscribe((response: any) => console.log(response));
        setTimeout(() => this.router.navigate(['home']), 1000);
      } else {
        this.quizService.newQuiz(send).subscribe((response: any) => console.log(response));
        setTimeout(() => this.router.navigate(['home']), 1000);
      }

    } else if(arr.length == 0){
      this.messageError = 'Precisa haver uma opção verdadeira'
    } else {
      this.messageError = 'Só pode haver uma opção verdadeira'
    }

  }

  edit(){

  }

}
