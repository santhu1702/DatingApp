import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../_Services/account.service';
import { User } from '../_models/User';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private accountservice: AccountService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let currentUser !: User;
    this.accountservice.currentUser$.pipe(take(1)).subscribe((user) => (currentUser = user));

      if(currentUser){
        request = request.clone({
          setHeaders:{
            Authorization : `Barer ${currentUser.token}`
          }
        })
      }
    return next.handle(request);
  }
}
