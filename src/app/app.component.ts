import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedintoAuth0 = true;
  isLoggedintoFirebase = false;
  auth0Token = 'Not logged in';
  firebaseToken = 'Not logged in';

  loginToAuth0() {

  }

  loginToFirebase() {

  }

  loginOutOfAuth0() {

  }

  loginOutOfFirebase() {

  }
}
