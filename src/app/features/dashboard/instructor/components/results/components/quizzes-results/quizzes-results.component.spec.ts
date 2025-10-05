import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesResultsComponent } from './quizzes-results.component';

describe('QuizzesResultsComponent', () => {
  let component: QuizzesResultsComponent;
  let fixture: ComponentFixture<QuizzesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
