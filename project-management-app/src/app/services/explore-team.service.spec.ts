import { TestBed } from '@angular/core/testing';

import { ExploreTeamService } from './explore-team.service';

describe('ExploreTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreTeamService = TestBed.get(ExploreTeamService);
    expect(service).toBeTruthy();
  });
});
