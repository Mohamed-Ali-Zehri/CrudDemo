import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { AccountDetailsComponent } from './acount-details/acount-details.component';
import { AcountListComponent } from './acount-list/acount-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AccountDetailsComponent,
    AcountListComponent,
    UpdateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
