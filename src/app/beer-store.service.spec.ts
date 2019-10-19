import { TestBed } from '@angular/core/testing';

import { BeerStoreService } from './beer-store.service';

describe('BeerStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerStoreService = TestBed.get(BeerStoreService);
    expect(service).toBeTruthy();
  });
});
