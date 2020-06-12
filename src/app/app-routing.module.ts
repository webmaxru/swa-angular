import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
