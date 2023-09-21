import { TestBed } from '@angular/core/testing';

import { LessionTestService } from './lession-test.service';

describe('LessionTestService', () => {
  let service: LessionTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessionTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
