import { TestBed } from '@angular/core/testing';

import { PogodaService } from './pogoda.service';

describe('PogodaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PogodaService = TestBed.get(PogodaService);
    expect(service).toBeTruthy();
  });
});
