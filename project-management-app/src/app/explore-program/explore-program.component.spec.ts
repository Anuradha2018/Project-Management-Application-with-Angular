import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProgramComponent } from './explore-program.component';

describe('ExploreProgramComponent', () => {
  let component: ExploreProgramComponent;
  let fixture: ComponentFixture<ExploreProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
