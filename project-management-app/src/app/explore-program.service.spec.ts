import { TestBed } from '@angular/core/testing';

import { ExploreProgramService } from './explore-program.service';

describe('ExploreProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreProgramService = TestBed.get(ExploreProgramService);
    expect(service).toBeTruthy();
  });
});
