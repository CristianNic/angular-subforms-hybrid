import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AddressSubformComponent } from '../../components/forms/address-subform/address-subform.component';
import { Customer } from '../../types/customer.types';
import { CustomerService } from '../../customer.service';
import { OrderDetailsSubformComponent } from 'src/app/components/forms/order-details-subform/order-details-subform.component';

@Component({
  selector: 'app-customer-form-page',
  templateUrl: './customer-form-page.component.html',
  styleUrls: ['./customer-form-page.component.scss']
})
export class CustomerFormPageComponent implements OnInit {
  
  @ViewChild(AddressSubformComponent, { static: true }) addressForm!: AddressSubformComponent;
  @ViewChild(OrderDetailsSubformComponent, { static: true }) orderDetailsForm!: OrderDetailsSubformComponent;
  
  customerForm!: UntypedFormGroup;
  initialCustomer?: Customer;
  customer?: Customer;

  constructor(private fb: UntypedFormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: this.addressForm.createFormGroup(),
      orderDetails: this.orderDetailsForm.createFormGroup()
    })
    this.getData()
  }

  getData() {
    // Get initial data from the (fake) backend
    this.customerService.fetchUser().subscribe((customer: Customer) => {
      this.initialCustomer = customer;
      this.customer = customer;
    });
    this.insertDataToForm(this.customer);
  }

  insertDataToForm(data: any) {
    // console.log('insertDataToForm -> customerForm:', data);
    this.customerForm.patchValue({ firstName: data.firstName, lastName: data.lastName });
  }

  onChange(id: any, data: any) { 
    console.log('id:', id, '|', 'data:', data);
    if ('firstName' === id) {
      this.customerForm.patchValue({ firstName: data });
      this.customer!.firstName = data;
    }
    if ('lastName' === id) {
      this.customerForm.patchValue({ lastName: data });
      this.customer!.lastName = data;
    }
  }

  onSubmit() {
    if (!this.customer) throw new Error('Missing customer');
    this.customerService.updateUser(this.customer).subscribe((customer) => {
      this.customer = customer;
      // alert('Customer updated!');
      alert(JSON.stringify(customer, null, 2));
    });
  }

  clear() {
    // Reset form and empty out object (could loop through)
    this.customerForm.reset();
    this.customer!.firstName = '';
    this.customer!.lastName = '';
    this.customer!.city = '';
    this.customer!.street = '';
    this.customer!.currency = '';
    this.customer!.item = '';
    console.log(this.customer);
  }

  clearPartial() {
    // What if you wanted to leave some data behind?

    // Patch original form
    this.customerForm.patchValue({ firstName: 'Jane', lastName: 'Doe' });
    
    // and subforms (setValue also works)
    this.customerForm.get('address')?.patchValue({ city: 'Montreal', street: 'boulevard Saint-Laurent' })
    this.customerForm.get('orderDetails')?.reset();
    // or this way
    // this.customerForm.get('orderDetails')?.patchValue({ currency: ' ', item: ' ' })

    // Reset the object or set a new one
    this.customer!.firstName = 'Jane';
    this.customer!.lastName = 'Doe';
    this.customer!.city = 'Montreal';
    this.customer!.street = 'boulevard Saint-Laurent';
    this.customer!.currency = '';
    this.customer!.item = '';
  }

}
