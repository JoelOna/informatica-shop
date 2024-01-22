import { TestBed } from '@angular/core/testing';

import { CookieDataService } from './cookie-data.service';

describe('CookieDataService', () => {
  let service: CookieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
