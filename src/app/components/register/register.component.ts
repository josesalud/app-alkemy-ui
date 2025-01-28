import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm:FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private authService:AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    });
  }



  registerUser(data:any){
      if(this.registerForm.valid){
        this.authService.register(this.registerForm.value).subscribe({
          next:value => {
            console.log(value);
            Swal.fire('Registro exitoso...',
              'Usuario registrado!!',
              'success',);
            this.registerForm.reset()
          },
          error:err=>{
            console.log(err);
            Swal.fire('Ocurrio un error al guardar los datos...', 'Intente de nuevo!!', 'error');
          }
        })
      }else{
        Swal.fire('Favor de completar el formulario...', 'Intente de nuevo!!', 'error');
      }
    }
}
