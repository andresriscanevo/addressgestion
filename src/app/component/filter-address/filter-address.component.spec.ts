import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAddressComponent } from './filter-address.component';

describe('FilterAddressComponent', () => {
  let component: FilterAddressComponent;
  let fixture: ComponentFixture<FilterAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
