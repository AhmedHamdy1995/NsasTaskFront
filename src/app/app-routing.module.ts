import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { NsasTaskListingComponent } from './features/nsasTask/nsas-task-listing/nsas-task-listing.component';
import { AuthGuard } from './core/guards/auth.guard';
import { TaskAddEditComponent } from './features/nsasTask/task-add-edit/task-add-edit.component';
import { TaskDetailsComponent } from './features/nsasTask/task-details/task-details.component';
import { ListingComponent } from './shared/listing/listing.component';

const routes: Routes = [
  {path: 'home', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'tasks', component:  NsasTaskListingComponent , canLoad: [AuthGuard] },
  {path: 'task-add-edit/:id', component: TaskAddEditComponent},
  {path: 'task-add-edit', component: TaskAddEditComponent},
  {path: 'task-details/:id', component: TaskDetailsComponent},
  // {path: 'listing', component: ListingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
