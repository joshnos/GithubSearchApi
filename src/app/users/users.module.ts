import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [ListOfUsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
