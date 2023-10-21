import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  name:string;
  role:string;
  constructor(public authService: AuthService, private router: Router){
    this.name = authService.getName();
    this.role = authService.getRole();
  }
  loggedIn(){
     return this.authService.loggedIn();
   }
   loggedOut(){
     localStorage.removeItem('token');
     this.router.navigate(['/']);
   }
}
