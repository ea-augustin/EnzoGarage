import { TestBed } from '@angular/core/testing';

import { FueltypeService } from './fueltype.service';

describe('FueltypesService', () => {
  let service: FueltypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FueltypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
