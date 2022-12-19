import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  devUrl = environment.apiUrl;

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: User) {
    return this.http.post(this.devUrl + 'Account/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model :any) {
    return this.http.post<User>(this.devUrl + 'Account/register',model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logOut(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null!);
  }


}
