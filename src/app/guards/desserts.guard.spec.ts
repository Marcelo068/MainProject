import { TestBed } from '@angular/core/testing';

import { DessertsGuard } from './desserts.guard';

describe('DessertsGuard', () => {
  let guard: DessertsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DessertsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
