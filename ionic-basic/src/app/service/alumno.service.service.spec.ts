import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumno.service.service';

describe('AlumnoServiceService', () => {
  let service: AlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
