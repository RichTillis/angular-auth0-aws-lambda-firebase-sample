import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isAuth0Authenticated$: Observable<boolean> = this.auth0Service.isAuthenticated$;

  private awsLambdaAuthTokenGenerated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isAwsLambdaAuthTokenGenerated$: Observable<boolean> = this.awsLambdaAuthTokenGenerated$.asObservable();

  private firebaseAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isFirebaseAuthenticated$: Observable<boolean> = this.firebaseAuthenticated$.asObservable();

  readonly auth0User$ = this.auth0Service.user$;

  constructor(private auth0Service: Auth0Service, @Inject(DOCUMENT) private doc: Document) { }


  loginToAuth0(): Observable<void> {
    return this.auth0Service.loginWithRedirect();
  }

  // add this method
  private logoutOfAuth0() {
    this.auth0Service.logout({ returnTo: this.doc.location.origin });
  }

  logout() {
    this.logoutOfAuth0();
    this.awsLambdaAuthTokenGenerated$.next(false);
    this.firebaseAuthenticated$.next(false);
  }


  getTokenFromLambda() {
    this.awsLambdaAuthTokenGenerated$.next(true);
  }

  loginToFirebase() {
    this.firebaseAuthenticated$.next(true);
  }
}
