import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

const httpOptions = {
  headers :new HttpHeaders({
    Authorization : 'Bearer ' + JSON.parse(localStorage.getItem('user') || '{}').token
  })
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseurl = environment.apiUrl
  constructor( private http : HttpClient ) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseurl + 'User',httpOptions);
  }

  getMember(userName: string) {
    return this.http.get<Member>(this.baseurl + 'User/' + userName,httpOptions);
  }
}
