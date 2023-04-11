import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSubformComponent } from './address-subform.component';

describe('AddressSubformComponent', () => {
  let component: AddressSubformComponent;
  let fixture: ComponentFixture<AddressSubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressSubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
