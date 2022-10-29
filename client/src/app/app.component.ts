import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The DatingApp';
  user: any;
  devUrl = 'https://localhost:44389';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get(this.devUrl + '/api/user').subscribe(Response => {
      this.user = Response;
    }, error => {
      console.log(error)
    })
  }

}
