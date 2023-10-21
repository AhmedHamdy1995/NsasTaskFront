import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AuthService } from './core/services/auth.service';
import { LoginComponent } from './shared/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { RegisterComponent } from './shared/register/register.component';
import { NsasTaskItemComponent } from './features/nsasTask/nsas-task-item/nsas-task-item.component';
import { NsasTaskListingComponent } from './features/nsasTask/nsas-task-listing/nsas-task-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    NsasTaskItemComponent,
    NsasTaskListingComponent,
    // PersonAddEditComponent,
    // PersonComponent,
    // PersonListingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule,
  ],
  providers: [
    DatePipe,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
