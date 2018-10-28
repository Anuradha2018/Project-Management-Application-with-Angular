import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTeamsComponent } from './explore-teams.component';

describe('ExploreTeamsComponent', () => {
  let component: ExploreTeamsComponent;
  let fixture: ComponentFixture<ExploreTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
