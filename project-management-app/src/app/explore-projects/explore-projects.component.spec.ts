import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProjectsComponent } from './explore-projects.component';

describe('ExploreProjectsComponent', () => {
  let component: ExploreProjectsComponent;
  let fixture: ComponentFixture<ExploreProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
