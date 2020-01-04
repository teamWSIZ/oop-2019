import { TestBed } from '@angular/core/testing';

import { AaService } from './aa.service';

describe('AaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AaService = TestBed.get(AaService);
    expect(service).toBeTruthy();
  });
});
