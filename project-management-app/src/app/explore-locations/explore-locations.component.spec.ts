import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLocationsComponent } from './explore-locations.component';

describe('ExploreLocationsComponent', () => {
  let component: ExploreLocationsComponent;
  let fixture: ComponentFixture<ExploreLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
