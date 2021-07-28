import { TestBed } from '@angular/core/testing';

import { GarageService } from './garage.service';

describe('GaragesService', () => {
  let service: GarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
