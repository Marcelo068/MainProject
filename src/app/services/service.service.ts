import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private route: Router) { }

  API = `${environment.API}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  getData(url: string) {
    return this.http.get<any[]>(`${this.API}${url}`);
  }

  register(body: any) {
    return this.http.post<any[]>(`${this.API}register`, body);
  }

  login(body: any) {
    return this.http.post<User>(`${this.API}login`, body);
  }

  authenticate() {
    this.httpOptions.headers = this.httpOptions.headers.set('authorization', `Bearer ${localStorage.getItem('acess_token')}`);
    return this.http.get<any[]>(`${this.API}authenticate`, this.httpOptions);
  }

  search(thingSearch: any, value: any, type: any) {
    for (let i = 0; i < thingSearch.length; i++) {
      if (thingSearch[i].name == value) {
        environment.forward = true;
        environment.container = `${type}${i}`;
        this.route.navigate(['menu']);
        return;
      } else {
        //I need do validations for user, "design"
        console.log('não encontrado');
      }
    }
  }

}
