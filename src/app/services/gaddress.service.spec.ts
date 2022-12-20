import { TestBed } from '@angular/core/testing';

import { GaddressService } from './gaddress.service';

describe('GaddressService', () => {
  let service: GaddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
