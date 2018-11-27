import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductComponent } from './explore-product.component';

describe('ExploreProductComponent', () => {
  let component: ExploreProductComponent;
  let fixture: ComponentFixture<ExploreProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
