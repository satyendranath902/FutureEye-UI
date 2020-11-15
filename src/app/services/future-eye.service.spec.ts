import { TestBed } from '@angular/core/testing';

import { FutureEyeService } from './future-eye.service';

describe('FutureEyeService', () => {
  let service: FutureEyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureEyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
