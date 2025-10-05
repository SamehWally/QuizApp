import { TestBed } from '@angular/core/testing';

import { ResuitsService } from './resuits.service';

describe('ResuitsService', () => {
  let service: ResuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
