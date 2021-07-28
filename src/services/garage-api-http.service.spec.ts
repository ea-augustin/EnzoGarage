import { TestBed } from '@angular/core/testing';

import { GarageApiHttpService } from './garage-api-http.service';

describe('GarageApiHttpService', () => {
  let service: GarageApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
