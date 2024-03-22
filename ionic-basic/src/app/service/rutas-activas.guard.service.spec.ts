import { TestBed } from '@angular/core/testing';
import { RutasActivasGuard } from './rutas-activas.guard.service';

describe('RutasActivasGuardService', () => {
  let service: RutasActivasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutasActivasGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
