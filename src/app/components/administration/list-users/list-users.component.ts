import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';
import { FormUserComponent } from './form-user/form-user.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  listUsers: any = [];

  constructor(
    private route: ActivatedRoute, private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.listUsers = data;
      },
    });
  }

  coins(){

  }

  editUser(id:number) {
    this.router.navigate(['add'], {relativeTo:this.route});
  }

  confirmDeleteUser(id: number) {
    Swal.fire({
      title: '¿Realmente quiere eliminar al usuario?',
      text: 'Si continua, no podra revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(id).subscribe({
          next: (data) => {
            Swal.fire({
              title: 'Usuario ' + data.name + ' eliminado',
              text: '',
              icon: 'success',
            });
          },
          complete: () => {
            this.loadUsers();
          },
        });
      }
    });
  }

}
