import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_Services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountservice: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {

    this.accountservice.login(this.model).subscribe({
      next: (response) => this.router.navigateByUrl('/members'),
      error: (err) => {console.log(err);},
      complete: () => {},
    });
  }

  logout() {
    this.accountservice.logOut();
    this.router.navigateByUrl('/');
  }


}
