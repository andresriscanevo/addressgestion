import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAddressComponent } from './details-address.component';

describe('DetailsAddressComponent', () => {
  let component: DetailsAddressComponent;
  let fixture: ComponentFixture<DetailsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
