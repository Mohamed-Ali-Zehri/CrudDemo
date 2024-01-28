import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../accountService';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css'] // Corrected styleUrl to styleUrls
})
export class UpdateAccountComponent implements OnInit {
  id!: number;
  account!: Account;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.account = new Account();
    this.id = this.route.snapshot.params['id'];

    if (this.id) { // Guard clause to ensure id is present
      this.accountService.getAccount(this.id)
        .subscribe(
          (data: Account) => {
            console.log(data);
            this.account = data;
          },
          (error: any) => console.log(error)
        );
    } else {
      // Handle the missing ID case, e.g., redirect back to the list
      this.gotoList();
    }
  }

  updateAccount(): void {
    if (this.account) { // Check if account is defined
      this.accountService.updateAccount(this.id, this.account)
        .subscribe(
          data => {
            console.log(data);
            this.gotoList(); // Navigate only after successful update
          },
          error => console.log(error)
        );
    }
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateAccount();
  }

  gotoList(): void {
    this.router.navigate(['/accounts']);
  }
}
