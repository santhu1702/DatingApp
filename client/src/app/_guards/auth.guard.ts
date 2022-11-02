import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, retry } from 'rxjs';
import { AccountService } from '../_Services/account.service';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private accountService : AccountService , private toastr : ToastrService){}

  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map(user => {
        if(user) return true;
        this.toastr.error('you shall not')
        return false
      })
    );
  }
  
}
