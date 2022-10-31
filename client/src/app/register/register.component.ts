import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountservice: AccountService) {}

  ngOnInit(): void {}

  register = () => {
    this.accountservice.register(this.model).subscribe(
      (Response) => {
        console.table(Response);
        this.cancel();
      },
      (Error) => {
        console.log(Error);
      }
    );
  };

  cancel = () => {
    debugger;
    this.cancelRegister.emit(false);
  };
}
