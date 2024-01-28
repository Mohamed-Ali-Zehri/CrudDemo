import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { AccountService } from '../accountService';

@Component({
  selector: 'app-acount-list',
  templateUrl: './acount-list.component.html',
  styleUrl: './acount-list.component.css'
})
export class AcountListComponent implements OnInit {
  accounts: Observable<Account[]> | undefined;
  constructor(private accountService: AccountService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.reloadData() ;
  }
  reloadData() {
    this.accounts = this.accountService.getAccountsList();
  }
  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe((data: Account) => { console.log(data); this.reloadData(); }, (error: any) => console.log(error));
  }
  accountDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  accountUpdate(id: number) {
    this.router.navigate(['update', id]);
  }
  }

  

