import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../requests/login-request';
import { TokenResponse } from '../responses/token-responses';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RegisterRequest } from '../requests/register-request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.apiUrl.concat("/auth")

  constructor(private http:HttpClient,private router:Router) {}

  login(loginRequest:LoginRequest){
    this.http.post<TokenResponse>(this.API_URL + "/login",loginRequest).subscribe({
      next:value => {
        console.log(value);
        localStorage.setItem("token",value.access_token);
        Swal.fire('Inicio de sesión exitoso...',
          'Bienvenido!!',
          'success',);
        this.router.navigate(['/administracion']);
      },
      error:err=>{
        console.log(err);
        Swal.fire('Usuario no encontrado...', 'Intente de nuevo!!', 'error');
      }
    })
  }

  register(registerRequest:RegisterRequest){
    return this.http.post<TokenResponse>(this.API_URL + "/register",registerRequest);
  }
}
