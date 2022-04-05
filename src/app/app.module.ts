import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardQuizComponent } from './components/card-quiz/card-quiz.component';
import { HeaderComponent } from './components/header/header.component';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';
import { EditQuizComponent } from './pages/edit-quiz/edit-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailsComponent,
    QuizFormComponent,
    CardQuizComponent,
    HeaderComponent,
    NewQuizComponent,
    EditQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
