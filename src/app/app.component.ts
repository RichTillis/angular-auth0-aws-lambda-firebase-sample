import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth0User$: Observable<any> = this.authService.auth0User$;
  firebaseToken$: Observable<any> = this.authService.firebaseToken$;
  firebaseUserId$: Observable<string | undefined> = this.authService.firebaseUserId$;

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
    this.authService.logoutOfFirebase();
  }
}
