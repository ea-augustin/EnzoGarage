import { TestBed } from '@angular/core/testing';

import { AbstractGarageService } from './abstract-garage.service';

describe('AbstractGarageService', () => {
  let service: AbstractGarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractGarageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
