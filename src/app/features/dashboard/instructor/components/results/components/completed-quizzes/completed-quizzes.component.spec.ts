import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedQuizzesComponent } from './completed-quizzes.component';

describe('CompletedQuizzesComponent', () => {
  let component: CompletedQuizzesComponent;
  let fixture: ComponentFixture<CompletedQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedQuizzesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
