import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {
  @Input() task: any;
  title:string = "";
  userTask:FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userTask = this.fb.group({
      nombre: ['', Validators.required],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.task ? this.title = "Editar usuario" : this.title = "Agregar usuario";
  }

  onSubmit() {
    if (this.userTask.valid) {
      this.userService.save(this.userTask.value).subscribe(response => {
        console.log('User saved successfully', response);
      });
    }
  }
}
