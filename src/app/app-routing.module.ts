import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { NsasTaskListingComponent } from './features/nsasTask/nsas-task-listing/nsas-task-listing.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'tasks', component:  NsasTaskListingComponent , canLoad: [AuthGuard] },
  // {path: 'person-add-edit/:id', component:  PersonAddEditComponent},
  // {path: 'person-add-edit', component:  PersonAddEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
