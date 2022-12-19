import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css'],
})
export class TestErrorsComponent implements OnInit {
  devUrl = 'https://localhost:7067/api/';
  validationErrors : string[] = [];

  user: any  ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  get404Error() {
    this.http.get(this.devUrl + 'buggy/not-found').subscribe({
      next: (response) => console.table(response) ,
      error: (err) => {
        console.log(err);
      },
      complete: () => { },
    });
  }
  get400Error() {
    this.http.get(this.devUrl + 'buggy/bad-request').subscribe({
      next: (response) => console.table(response),
      error: (err) => { console.log(err); },
      complete: () => { },
    });
  }
  get500Error() {
    this.http.get(this.devUrl + 'buggy/server-error').subscribe({
      next: (response) => console.table(response),
      error: (err) => { console.log(err); },
      complete: () => { },
    });
  }
  get401Error() {
    this.http.get(this.devUrl + 'buggy/auth').subscribe({
      next: (response) => console.table(response),
      error: (err) => { console.log(err); },
      complete: () => { },
    });
  }
  get400Validation() {
    this.http.post(this.devUrl + 'account/register',{}).subscribe({
      next: (response) => console.table(response),
      error: (err) => { console.log(err); this.validationErrors = err},
      complete: () => { },
    });
  }


}
