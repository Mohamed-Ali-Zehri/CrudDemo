import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../accountService';

@Component({
  selector: 'app-acount-details',
  templateUrl: './acount-details.component.html',
  styleUrl: './acount-details.component.css'
})

export class AccountDetailsComponent implements OnInit {
  id!: number;
  account!: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.account = new Account();

    this.id = this.route.snapshot.params['id'];

    this.accountService.getAccount(this.id)
      .subscribe(
        (        data: Account) => {
          console.log(data);
          this.account = data;
        },
        (        error: any) => console.log(error)
      );
  }

  list() {
    this.router.navigate(['/accounts']);
  }
}
