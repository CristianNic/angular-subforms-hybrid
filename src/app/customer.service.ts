import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './types/customer.types';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // For demo purposes we just store the user here in the service
  // In a real world application you would make a request to the backend
  private customer: Customer = {
    firstName: 'Ethan',
    lastName: 'Hawke',
    city: 'Vancouver',
    street: 'Pacific St',
    currency: 'CAD',
    item: 'Toaster'
  };

  fetchUser(): Observable<Customer> {
    return of(this.customer);
  }

  updateUser(customer: Customer): Observable<Customer> {
    this.customer = { ...customer };
    return of(this.customer);
  }
}