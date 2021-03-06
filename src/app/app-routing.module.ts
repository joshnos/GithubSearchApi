import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', 
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'repositories', 
  loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
