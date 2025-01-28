import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { FormUserComponent } from './list-users/form-user/form-user.component';

const routes: Routes = [
  {
    path:'',
    component: AdministrationComponent,
    children: [
      {
        path:'users',
        component :ListUsersComponent,
      },
      {
        path:'users/add',
        component: FormUserComponent
      },
      {
        path:'users/edit/:id',
        component:FormUserComponent
      },
      {
        path:'tasks',
        component :ListTasksComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
