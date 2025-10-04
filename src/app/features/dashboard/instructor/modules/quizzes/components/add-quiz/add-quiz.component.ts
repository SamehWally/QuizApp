import {
  Component,
  inject,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  input,
} from '@angular/core';
import { ToastService } from '../../../../../../../core/services/toast.service';
import { QuizService } from '../../services/quiz.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { IStudentWithoutGroup } from '../../../interfaces/IStudentWithoutGroup';
// import { StudentService } from '../../../services/student.service';
// import { IStudentGroup } from '../../../interfaces/IStudentGroup';
// import { ToastService } from '../../../../../../../../core/services/toast.service';

// export interface QuizForm {
//   title: string;
//   duration: number;
//   numberOfQuestions: number;
//   scorePerQuestion: number;
//   description: string;
//   scheduledDate: Date;
//   difficulty: string;
//   category: string;
//   groupName: string;
// }

@Component({
  selector: 'app-add-quiz',
  standalone: false,
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss',
})
// export class AddQuizComponent implements OnInit, OnChanges {
export class AddQuizComponent implements OnInit {
  private readonly _quizService = inject(QuizService);
  private readonly _toast = inject(ToastService);

  @Input() studentData: any;
  @Input() FormID!: number;
  @Output() closeDialog = new EventEmitter<void>();

  // studentValue!: IStudentWithoutGroup;
  // studentGroup!: any;

  // students: IStudentWithoutGroup[] = [];
  // filteredStudents: IStudentWithoutGroup[] = [];

  studentGroups: any[] = [];
  // selectedGroup: any;

  durationOptions: any[] = [];
  numberQuestionsOptions: any[] = [];
  scorePerQuestionsOptions: any[] = [];
  categoryOptions: any[] = [];
  difficultyOptions: any[] = [];
  scheduledDate: any;
  // selectedDuration: any;

  // filteredStudentGroups: IStudentGroup[] = [];

  // Quiz Form
  // title: string = '';
  // selectedDuration: any;
  // selectedNumberQuestions: any;
  // selectedscorePerQuestion: any;
  // description: string = '';
  // scheduledDate: Date = new Date();
  // selectedDifficulty: any;
  // selectedCategory: any;
  // selectedGroup: any;
  quizForm!: FormGroup;

  constructor(private _http: HttpClient) {
    this.quizForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl(
        { label: '15', value: 15 },
        Validators.required
      ),
      questions_number: new FormControl(
        { label: '1', value: 1 },
        Validators.required
      ),
      score_per_question: new FormControl(
        { label: '1', value: 1 },
        Validators.required
      ),
      scheduledDate: new FormControl(null, Validators.required),
      difficulty: new FormControl(
        { label: 'easy', value: 1 },
        Validators.required
      ),
      type: new FormControl({ label: 'FE', value: 1 }, Validators.required),
      group: new FormControl(
        { label: 'menisy', value: '68de750c5358146037d5f2e0' },
        Validators.required
      ),
    });
  }

  // submitForm() {
  //   const payload = {
  //     title: this.title,
  //     description: this.description,
  //     group: this.selectedGroup?.value,
  //     questions_number: this.selectedNumberQuestions?.value,
  //     difficulty: this.selectedDifficulty?.value,
  //     type: this.selectedCategory?.value,
  //     schadule: new Date(this.scheduledDate).toISOString(),
  //     duration: this.selectedDuration?.value,
  //     score_per_question: this.selectedscorePerQuestion?.value,
  //   };

  // console.log('Quiz Payload:', payload);
  // this._http
  //   .post('https://upskilling-egypt.com:3005/api/quiz', payload)
  //   .subscribe({
  //     next: (res: any) => console.log('تم الإرسال بنجاح', res),
  //   });

  // }

  ngOnInit(): void {
    this.getAllGroups();
    // this.quizForm.get('duration')?.setValue({ label: '15', value: 15 });

    this.durationOptions = [
      { label: '10', value: 10 },
      { label: '15', value: 15 },
      { label: '30', value: 30 },
    ];

    this.numberQuestionsOptions = [
      { label: '1', value: 1 },
      { label: '5', value: 5 },
      { label: '10', value: 10 },
    ];

    this.scorePerQuestionsOptions = [
      { label: '1', value: 1 },
      { label: '3', value: 3 },
      { label: '6', value: 6 },
    ];

    this.categoryOptions = [
      { label: 'FE', value: 1 },
      { label: 'BE', value: 2 },
    ];

    // selectedCategory = this.CategoryOptions[1]; // القيمة الافتراضية: 10

    this.difficultyOptions = [
      { label: 'easy', value: 1 },
      { label: 'medium', value: 2 },
      { label: 'hard', value: 3 },
    ];

    // selectedDifficulty = this.DifficultyOptions[1];

    this.scheduledDate = new Date('2023-05-11T13:00:00');
    // const groupValue = this.quizForm.get('duration')?.value;
    // console.log(
    //   'label due',
    //   this.durationOptions.find((g) => g.value === groupValue)?.label
    // );

    // console.log('Duration Options:', this.durationOptions);

    // setTimeout(() => {
    //   this.quizForm.get('duration')?.setValue(15);
    // });
  }

  // get selectedDurationLabel(): string | undefined {
  //   const groupValue = this.quizForm.get('duration')?.value;
  //   console.log(
  //     'label group',
  //     this.durationOptions.find((g) => g.value === groupValue)?.label
  //   );
  //   return this.durationOptions.find((g) => g.value === groupValue)?.label;
  // }

  // get selectedDurationLabel(): string | undefined {
  //   console.log('duration value:', this.quizForm.get('duration')?.value);

  //   const value = this.quizForm.get('duration')?.value;
  //   if (!this.durationOptions || this.durationOptions.length === 0) return '';
  //   return this.durationOptions.find((opt) => opt.value === value)?.label;
  // }

  // get selectedQueNumberLabel(): string | undefined {
  //   const groupValue = this.quizForm.get('questions_number')?.value;
  //   console.log(
  //     'label group',
  //     this.studentGroups.find((g) => g.value === groupValue)?.label
  //   );
  //   return this.studentGroups.find((g) => g.value === groupValue)?.label;
  // }

  get selectedScoreLabel(): string | undefined {
    const groupValue = this.quizForm.get('score_per_question')?.value;
    console.log(
      'label group',
      this.studentGroups.find((g) => g.value === groupValue)?.label
    );
    return this.studentGroups.find((g) => g.value === groupValue)?.label;
  }

  get selectedDifficultyLabel(): string | undefined {
    const groupValue = this.quizForm.get('difficulty')?.value;
    console.log(
      'label group',
      this.studentGroups.find((g) => g.value === groupValue)?.label
    );
    return this.studentGroups.find((g) => g.value === groupValue)?.label;
  }

  get selectedTypeLabel(): string | undefined {
    const groupValue = this.quizForm.get('type')?.value;
    console.log(
      'label group',
      this.studentGroups.find((g) => g.value === groupValue)?.label
    );
    return this.studentGroups.find((g) => g.value === groupValue)?.label;
  }

  // get selectedGroupLabel(): string | undefined {
  //   const groupValue = this.quizForm.get('group')?.value;
  //   console.log(
  //     'label group',
  //     this.studentGroups.find((g) => g.value === groupValue)?.label
  //   );
  //   return this.studentGroups.find((g) => g.value === groupValue)?.label;
  // }

  submitForm() {
    const raw = this.quizForm.value;

    const payload = {
      title: raw.title,
      description: raw.description,
      group: raw.group?.value || raw.group,
      questions_number: raw.questions_number?.value || raw.questions_number,
      difficulty: raw.difficulty?.label || raw.difficulty,
      type: raw.type?.label || raw.type,
      schadule: new Date(raw.scheduledDate).toISOString(),
      duration: raw.duration?.label || raw.duration,
      score_per_question:
        raw.score_per_question?.label || raw.score_per_question,
    };

    console.log('Reactive Payload:', payload);
    // this._http.post('API_URL', payload).subscribe(...)
    this._quizService.addQuiz(payload).subscribe({
      next: (res: any) => {
        console.log('✅ تم الإرسال بنجاح:', res);
        this._toast.showSuccess('تم إنشاء الكويز بنجاح 🎉');
      },
    });
  }

  //   next: (res) => {

  //   },
  //   error: (err) => {
  //     console.error('❌ حصل خطأ أثناء الإرسال:', err);
  //     this._toast.error('فيه مشكلة في إرسال الكويز 😢');
  //   },
  // });
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['studentData'] && this.studentData) {
  //     this.setInitialValues();
  //   }
  // }

  // getStudents() {
  //   if (this.FormID === 1) {
  //     this._StudentService.getStudentsWithoutGroup().subscribe({
  //       next: (res) => {
  //         console.log('fullName', res);
  //         this.students = res.map((s) => ({
  //           ...s,
  //           fullName: `${s.first_name} ${s.last_name}`,
  //         }));
  //       },
  //     });
  //   } else if (this.FormID === 2) {
  //     this._StudentService.getStudents().subscribe({
  //       next: (res) => {
  //         this.students = res.map((s) => ({
  //           ...s,
  //           fullName: `${s.first_name} ${s.last_name}`,
  //         }));
  //       },
  //     });
  //   }
  //   this.setInitialValues();
  // }

  getAllGroups() {
    this._quizService.getAllGroups().subscribe({
      next: (res) => {
        // this.studentGroups = res;
        // console.log('Groups', res);
        this.studentGroups = res.map((item: any) => ({
          label: item.name, // أو أي اسم مناسب للعرض
          value: item._id, // أو القيمة اللي هتستخدمها
        }));
        console.log('Mapped Groups', this.studentGroups);
        // if (this.studentGroups.length > 0) {
        //   this.quizForm.get('group')?.setValue(this.studentGroups[1].value);
        // }
      },
    });
  }

  // private setInitialValues() {
  //   if (this.studentData) {
  //     let foundStudent: IStudentWithoutGroup | undefined;

  //     if (this.students.length > 0) {
  //       foundStudent = this.students.find(
  //         (s) => s._id === this.studentData._id
  //       );
  //     }

  //     if (foundStudent) {
  //       this.studentValue = foundStudent;
  //     } else if (this.studentData.first_name && this.studentData.last_name) {
  //       this.studentValue = {
  //         ...this.studentData,
  //         fullName: `${this.studentData.first_name} ${this.studentData.last_name}`,
  //       } as IStudentWithoutGroup;
  //     }

  //     if (this.studentGroups.length > 0 && this.studentData.group) {
  //       const foundGroup = this.studentGroups.find(
  //         (g) => g._id === this.studentData.group._id
  //       );
  //       if (foundGroup) {
  //         this.studentGroup = foundGroup;
  //       }
  //     }
  //   }
  // }

  // search(event: AutoCompleteCompleteEvent) {
  //   const query = event.query.toLowerCase();
  //   this.filteredStudents = this.students.filter((student) =>
  //     student.fullName?.toLowerCase().includes(query)
  //   );
  // }

  // searchGroup(event: AutoCompleteCompleteEvent) {
  //   const query = event.query.toLowerCase();
  //   this.filteredStudentGroups = this.studentGroups.filter((group) =>
  //     group.name?.toLowerCase().includes(query)
  //   );
  // }

  close() {
    this.closeDialog.emit();
  }

  //   durationOptions = [
  //   { label: '5', value: 5 },
  //   { label: '10', value: 10 },
  //   { label: '15', value: 15 },
  //   { label: '20', value: 20 }
  // ];

  // selectedDuration = 10;

  // selectedNumberQuestions = this.numberQuestionsOptions[1]; // القيمة الافتراضية: 10

  // selectedscorePerQuestion = this.scorePerQuestionsOptions[1]; // القيمة الافتراضية: 10
}
