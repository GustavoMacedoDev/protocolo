import { TestBed } from '@angular/core/testing';

import { InvalidTokenApiService } from './invalid-token-api.service';

describe('InvalidTokenApiService', () => {
  let service: InvalidTokenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvalidTokenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
