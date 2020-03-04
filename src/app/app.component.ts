import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_helpers/auth.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-page';
  currentUser: User;
  test = false;
  isLoggedIn : Observable<boolean>;
  constructor(
      private router: Router,
      public  authenticationService: AuthenticationService,
      private authGuard: AuthGuard
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.isLoggedIn = this.authenticationService.isLoggedIn();
  }
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/']);
      this.test = false;
  }
  activate(id : string) {
    let buttons = document.getElementsByName('button');
    buttons.forEach(button=>{
      button.removeAttribute("style");
    });
    let buttonSelected = document.getElementById(id);
    buttonSelected.setAttribute("style", "color:red");
  }
}
