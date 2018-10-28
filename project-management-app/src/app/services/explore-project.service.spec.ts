import { TestBed } from '@angular/core/testing';

import { ExploreProjectService } from './explore-project.service';

describe('ExploreProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreProjectService = TestBed.get(ExploreProjectService);
    expect(service).toBeTruthy();
  });
});
