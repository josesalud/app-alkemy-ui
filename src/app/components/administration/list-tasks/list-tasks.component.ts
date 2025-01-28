import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { FormUserComponent } from '../list-users/form-user/form-user.component';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent {
  listTask:any = [];

    constructor(private taskService:TaskService){}

    ngOnInit(): void {
      this.loadTask();
    }

    loadTask(){
      this.taskService.getAll().subscribe(
        {
          next: data =>{
            this.listTask = data;
          }
        }
      )
    }

    openUserModal(task?: any) {

    }
}
