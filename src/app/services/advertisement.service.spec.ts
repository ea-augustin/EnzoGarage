import { TestBed } from '@angular/core/testing';

import { AdvertisementService } from './advertisement.service';

describe('AdvertisementsService', () => {
  let service: AdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
