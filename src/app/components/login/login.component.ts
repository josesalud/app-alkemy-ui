import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

constructor(private router: Router, private formBuilder: FormBuilder,
  private authService:AuthService
) {
  this.loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required]
  });
}



  iniciarSesion(data:any){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value);
    }else{
      alert('Datos incorrectos');
    }
  }
}
