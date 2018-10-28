import { TestBed } from '@angular/core/testing';

import { ExploreLocationService } from './explore-location.service';

describe('ExploreLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreLocationService = TestBed.get(ExploreLocationService);
    expect(service).toBeTruthy();
  });
});
