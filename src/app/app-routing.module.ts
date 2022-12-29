import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path: 'login', redirectTo:  '/home',  pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'reset', component: ResetComponent},
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo:  '/home',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
