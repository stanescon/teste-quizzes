import { EditQuizComponent } from './pages/edit-quiz/edit-quiz.component';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { DetailsComponent } from './pages/details/details.component';
import { CardQuizComponent } from './components/card-quiz/card-quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'card-quiz', component: CardQuizComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'new-quiz', component: NewQuizComponent},
  {path: 'quiz-form', component: QuizFormComponent},
  {path: 'edit-quiz/:id', component: EditQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
