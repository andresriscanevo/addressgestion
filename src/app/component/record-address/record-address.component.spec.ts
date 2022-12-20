import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAddressComponent } from './record-address.component';

describe('RecordAddressComponent', () => {
  let component: RecordAddressComponent;
  let fixture: ComponentFixture<RecordAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
