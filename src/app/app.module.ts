import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormPageComponent } from './pages/customer-form-page/customer-form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  // MatFormFieldDefaultOptions,
  MatFormFieldModule,
  // MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddressSubformComponent } from './components/forms/address-subform/address-subform.component';
import { OrderDetailsSubformComponent } from './components/forms/order-details-subform/order-details-subform.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormPageComponent,
    AddressSubformComponent,
    OrderDetailsSubformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useFactory: (): MatFormFieldDefaultOptions => ({
    //     appearance: 'outline',
    //   }),
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
