import { TestBed } from '@angular/core/testing';

import { ToServiceService } from './to-service.service';

describe('ToServiceService', () => {
  let service: ToServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
