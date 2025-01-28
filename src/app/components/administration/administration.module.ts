import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { MenuComponent } from './menu/menu.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormUserComponent } from './list-users/form-user/form-user.component';
import { FormTaskComponent } from './list-tasks/form-task/form-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTasksComponent } from './list-tasks/list-tasks.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    MenuComponent,
    ListUsersComponent,
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    AgGridModule
  ]
})
export class AdministrationModule { }
