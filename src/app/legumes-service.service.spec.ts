import { TestBed } from '@angular/core/testing';

import { LegumesServiceService } from './legumes-service.service';

describe('LegumesServiceService', () => {
  let service: LegumesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegumesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
