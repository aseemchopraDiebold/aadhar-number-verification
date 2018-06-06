import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerifyAadharNumberComponent } from './verify-aadhar-number/verify-aadhar-number.component';
import { AadharNumberInfoFetchService } from './aadhar-number-info-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { MyLibModule } from 'dist/my-lib';

@NgModule({
  declarations: [
    AppComponent,
    VerifyAadharNumberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyLibModule
  ],
  providers: [AadharNumberInfoFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
