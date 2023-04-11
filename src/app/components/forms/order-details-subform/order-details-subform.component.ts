import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { Customer } from 'src/app/types/customer.types';

@Component({
  selector: 'app-order-details-subform',
  templateUrl: './order-details-subform.component.html',
  styleUrls: ['./order-details-subform.component.scss']
})
export class OrderDetailsSubformComponent implements OnInit {

  orderDetailsFormGroup!: UntypedFormGroup;

  // One way to set data on input
  // @Input()
  // set initialCustomer(customer: any) {
  //   this.orderDetailsFormGroup.patchValue({
  //     currency: customer.currency,
  //     item: customer.item,
  //   });
  // }

  // Better with current forms - use insertDataToForm() after
  @Input() initialCustomer: any;
  @Input() customer: any;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.insertDataToForm(this.initialCustomer);
  }

  createFormGroup() {
    this.orderDetailsFormGroup = this.fb.group({
      currency: ['', [Validators.required]],
      item: ['', [Validators.required]],
    });
    return this.orderDetailsFormGroup;
  }

  insertDataToForm(data: any) {
    // console.log('insertDataToForm -> orderDetailsForm:', data);
    this.orderDetailsFormGroup.patchValue({
      currency: data.currency,
      item: data.item,
    });
  }

  onChange(id: any, data: any) { 
    console.log('id:', id, '|', 'data:', data);
    if ('currency' === id) {
      this.orderDetailsFormGroup.patchValue({ currency: data });
      this.customer!.currency = data;
    }
    if ('item' === id) {
      this.orderDetailsFormGroup.patchValue({ item: data });
      this.customer!.item = data;
    }
  }

}
