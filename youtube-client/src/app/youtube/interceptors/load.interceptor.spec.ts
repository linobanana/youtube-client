import { TestBed } from '@angular/core/testing';

import { LoadInterceptor } from './load.interceptor';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadInterceptor = TestBed.get(LoadInterceptor);
    expect(service).toBeTruthy();
  });
});
