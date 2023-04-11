import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ValidatorFn } from '@angular/forms';
// import { AbstractControlOptions } from '@angular/forms';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-subform',
  templateUrl: './address-subform.component.html',
  styleUrls: ['./address-subform.component.scss']
})
export class AddressSubformComponent implements OnInit {
  
  addressFormGroup!: UntypedFormGroup;

  // Better this way with current forms - use insertDataToForm() after
  @Input() initialCustomer: any;
  @Input() customer: any;
  
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.insertDataToForm(this.initialCustomer);
    console.log('addressForm Customer', this.customer)
  }

  createFormGroup() {
    this.addressFormGroup = this.fb.group({
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
    });
    return this.addressFormGroup;
  }

  insertDataToForm(data: any) {
    // console.log('insertDataToForm -> addressForm:', data);
    this.addressFormGroup.patchValue({
      city: data.city,
      street: data.street,
    });
  }

  onChange(id: any, data: any) { 
    console.log('id:', id, '|', 'data:', data);
    if ('city' === id) {
      this.addressFormGroup.patchValue({ city: data });
      this.customer!.city = data;
    }
    if ('street' === id) {
      this.addressFormGroup.patchValue({ street: data });
      this.customer!.street = data;
    }
  }

}
