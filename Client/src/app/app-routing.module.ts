import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './components/common/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"resume", component: ResumeComponent},
  {path: 'login', component: LoginComponent},
  {path: "", redirectTo: "/home",  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
