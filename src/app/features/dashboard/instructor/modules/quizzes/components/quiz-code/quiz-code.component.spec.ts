import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCodeComponent } from './quiz-code.component';

describe('QuizCodeComponent', () => {
  let component: QuizCodeComponent;
  let fixture: ComponentFixture<QuizCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
