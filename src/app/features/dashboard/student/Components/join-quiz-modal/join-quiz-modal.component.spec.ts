import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinQuizModalComponent } from './join-quiz-modal.component';

describe('JoinQuizModalComponent', () => {
  let component: JoinQuizModalComponent;
  let fixture: ComponentFixture<JoinQuizModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinQuizModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
