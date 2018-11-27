import { TestBed } from '@angular/core/testing';

import { ExploreProductService } from './explore-product.service';

describe('ExploreProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreProductService = TestBed.get(ExploreProductService);
    expect(service).toBeTruthy();
  });
});
