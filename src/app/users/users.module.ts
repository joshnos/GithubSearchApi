import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [ListOfUsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
