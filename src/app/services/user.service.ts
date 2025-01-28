import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterRequest } from '../requests/register-request';
import { Observable } from 'rxjs';
import { UserResponse } from '../responses/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = environment.apiUrl.concat('/users');

  constructor(private http: HttpClient, private router: Router) {}

  getAll():Observable<UserResponse> {
    return this.http.get<any>(this.API_URL);
  }

  getUser(id:number):Observable<UserResponse> {
    return this.http.get<any>(this.API_URL+"/"+id);
  }

  save(registerRequest: RegisterRequest):Observable<UserResponse> {
    return this.http.post<any>(this.API_URL, registerRequest);
  }

  update(registerRequest: RegisterRequest) {
    this.http.put<any>(this.API_URL + '/register', registerRequest);
  }

  delete(id:number):Observable<UserResponse> {
    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
      body: {"id":id},
    };
    return this.http.delete<any>(this.API_URL+"/"+id);
  }


}
