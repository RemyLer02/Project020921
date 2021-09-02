import { TestBed } from '@angular/core/testing';

import { FruitsServiceService } from './fruits-service.service';

describe('FruitsServiceService', () => {
  let service: FruitsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
