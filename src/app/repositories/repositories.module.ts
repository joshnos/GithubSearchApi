import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { ListOfRepositoriesComponent } from './components/list-of-repositories/list-of-repositories.component';
import { RepositoryComponent } from './components/repository/repository.component';


@NgModule({
  declarations: [ListOfRepositoriesComponent, RepositoryComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ]
})
export class RepositoriesModule { }
