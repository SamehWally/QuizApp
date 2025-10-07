import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { TranslatePipe } from '@ngx-translate/core';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';

import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { TextareaModule } from 'primeng/textarea';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from '../../../../../Shared/shared.module';
import { AddEditQuestionComponent } from './components/add-edit-question/add-edit-question.component';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    QuizDashboardComponent,
    AddQuizComponent,
    QuizDetailsComponent,
    QuestionBankComponent,
    AddEditQuestionComponent,
    DeleteQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizzesRoutingModule,
    TranslatePipe,
    FormsModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    DropdownModule,
    Select,
    CalendarModule,
    TextareaModule,
    ReactiveFormsModule,
    CheckboxModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
})
export class QuizzesModule {}
