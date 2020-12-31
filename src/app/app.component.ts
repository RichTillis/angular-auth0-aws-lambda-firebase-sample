import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedintoAuth0: boolean = false;
  isLoggedintoFirebase: boolean = false;
  isTokenGenerated: boolean = false;

  constructor(public authService: AuthService) {
    authService.isAuth0Authenticate$.subscribe(loggedIntoAuth0 => {
      this.isLoggedintoAuth0 = loggedIntoAuth0;
    });
    authService.isAwsLambdaAuthTokenGenerated$.subscribe(tokenExists => {
      this.isTokenGenerated = tokenExists;
    });
    authService.isFirebaseAuthenticated$.subscribe(loggedIntoFirebase => {
      this.isLoggedintoFirebase = loggedIntoFirebase;
    });
  }

  loginToAuth0() {
    this.authService.loginToAuth0();
  }

  logoutOfAuth0() {
    this.authService.logout();
  }

  getTokenFromLambda() {
    this.authService.getTokenFromLambda();
  }

  loginToFirebase() {
    this.authService.loginToFirebase();
  }

  logoutOfFirebase() {
    this.authService.logout();
  }
}
