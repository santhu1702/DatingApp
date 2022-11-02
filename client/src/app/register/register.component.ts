import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountservice: AccountService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}

  register = () => {
    this.accountservice.register(this.model).subscribe({
      next: (response) => {
        console.table(Response);
        this.cancel();
      },
      error: (Error) => {console.log(Error);this.tostr.error(Error.error)},
      complete: () => {},
    });
  };

  cancel = () => {
    debugger;
    this.cancelRegister.emit(false);
  };
}
