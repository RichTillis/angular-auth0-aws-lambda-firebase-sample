import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly isAuth0Authenticated$: Observable<boolean> = this.auth0Service.isAuthenticated$;

  readonly auth0User$ = this.auth0Service.user$;

  private firebaseTokenSubject$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  readonly firebaseToken$: Observable<any> = this.firebaseTokenSubject$.asObservable();

  private firebaseUserIdSubject$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  readonly firebaseUserId$: Observable<string | undefined> = this.firebaseUserIdSubject$.asObservable();

  constructor(private auth0Service: Auth0Service, @Inject(DOCUMENT) private doc: Document) { }

  loginToAuth0(): Observable<void> {
    return this.auth0Service.loginWithRedirect();
  }

  private logoutOfAuth0() {
    this.auth0Service.logout({ returnTo: this.doc.location.origin });
  }

  getTokenFromLambda() {
    this.firebaseTokenSubject$.next("MyPretendToken_ABCD123EFG456");
  }

  loginToFirebase() {
    this.firebaseUserIdSubject$.next("Pretend_Firebase_user");
  }

  logout() {
    this.logoutOfAuth0();
    this.firebaseTokenSubject$.next(undefined);
    this.firebaseUserIdSubject$.next(undefined);
  }

  logoutOfFirebase() {
    this.firebaseTokenSubject$.next(undefined);
    this.firebaseUserIdSubject$.next(undefined);
  }

}