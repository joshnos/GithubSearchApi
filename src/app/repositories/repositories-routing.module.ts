import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfRepositoriesComponent } from './components/list-of-repositories/list-of-repositories.component';


const routes: Routes = [
  { path: '', component: ListOfRepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule { }
