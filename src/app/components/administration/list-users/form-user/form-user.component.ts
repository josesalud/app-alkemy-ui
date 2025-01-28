import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from '../../../../responses/user-response';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit{
    user?: UserResponse;
    title:string = "";
    userForm:FormGroup;
    id:any;

    constructor(private fb: FormBuilder, private userService: UserService,
      private route:ActivatedRoute,  private location: Location
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.userForm = this.fb.group({
        name: [this.user ? this.user.name: '', Validators.required],
        email: [this.user ? this.user.email: '', [Validators.required, Validators.email]],
        id:[this.id ? this.id : '']
      });
    }

    ngOnInit(): void {
      if(this.id){
        this.title = "Editar usuario";
        this.getUser()
      }else{
        this.title = "Agregar usuario";
      }

    }

    onSubmit() {
      if (this.userForm.valid) {
        this.userService.save(this.userForm.value).subscribe({
          next:data=>{
            Swal.fire('Registro exitoso...',
                'Usuario registrado!!',
                'success',);
              this.userForm.reset();
          },
          complete:()=>{

          }
        });
      }else{
        Swal.fire('Favor de completar el formulario...', 'Intente de nuevo!!', 'error');
      }
    }

    getUser(){
      this.userService.getUser(this.id).subscribe({
        next:data=>{
          this.userForm.controls['name'].setValue(data.name);
          this.userForm.controls['email'].setValue(data.email);

        }
      });
    }

    goBack(): void {
      this.location.back();
    }

}
