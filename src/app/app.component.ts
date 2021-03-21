import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedintoAuth0$: Observable<boolean> = this.authService.isAuth0Authenticate$;
  isLoggedintoFirebase$: Observable<boolean> = this.authService.isFirebaseAuthenticated$;
  isTokenGenerated$: Observable<boolean> = this.authService.isAwsLambdaAuthTokenGenerated$;

  constructor(private authService: AuthService) {  }

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
