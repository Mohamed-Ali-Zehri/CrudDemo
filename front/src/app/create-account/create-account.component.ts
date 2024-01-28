import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../accountService';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{
  account: Account = new Account();
  submitted = false;
  constructor(private accountServive: AccountService, private router: Router ) {}

  ngOnInit(): void {
      
  }
  newAccount(): void {
    this.submitted = false;
    this.account = new Account();
    
  }
  save() {
    console.log(this.account)
    this.accountServive.createAccount(this.account).subscribe((data: any) => { console.log(data) }, (error: any) => console.log(error));
    this.account = new Account();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();

  }
  gotoList() {
    this.router.navigate(['/accounts']);

  }
}
