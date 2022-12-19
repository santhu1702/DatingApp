import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;
  devUrl = 'https://localhost:7067';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  registerToggle = () => {
    this.registerMode = !this.registerMode;
  };

  getUsers = () =>
    this.http
      .get(this.devUrl + '/api/User')
      .subscribe((users) => (this.users = users));

  cancelRegisterMode = (event: boolean) => {
    debugger
    this.registerMode = event;
  };
}
