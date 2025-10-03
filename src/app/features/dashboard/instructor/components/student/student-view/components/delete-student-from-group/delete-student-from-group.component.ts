import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IStudentWithoutGroup } from '../../../interfaces/IStudentWithoutGroup';
import { IStudentGroup } from '../../../interfaces/IStudentGroup';
import { StudentService } from '../../../services/student.service';
import { ToastService } from '../../../../../../../../core/services/toast.service';

@Component({
  selector: 'app-delete-student-from-group',
  standalone: false,
  templateUrl: './delete-student-from-group.component.html',
  styleUrl: './delete-student-from-group.component.scss',
})
export class DeleteStudentFromGroupComponent implements OnInit {
  ngOnInit(): void {
    if (this.studentData) {
      this.studentValue = this.studentData._id;
      this.studentGroup = this.studentData.group._id;
    }
  }
  @Input() studentData: any;
  @Output() closeDialog = new EventEmitter<void>();
  studentValue!: string;
  studentGroup!: string;
  private readonly _StudentService = inject(StudentService);
  private readonly _toast = inject(ToastService);
  deleteStudentFromGroup() {
    if (this.studentValue && this.studentGroup) {
      this._StudentService
        .deleteStudentFromGroups(this.studentValue, this.studentGroup)
        .subscribe({
          next: (res) => {
            console.log(res);
            this._toast.showSuccess(res.message);
            this.close();
          },
        });
    } else {
      this._toast.showError('Please select both student and group.');
    }
  }
  close() {
    this.closeDialog.emit();
  }
}
