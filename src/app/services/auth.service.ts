import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth0UserSubject$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  readonly auth0User$: Observable<any> = this.auth0UserSubject$.asObservable();

  private firebaseTokenSubject$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  readonly firebaseToken$: Observable<any> = this.firebaseTokenSubject$.asObservable();

  private firebaseUserIdSubject$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  readonly firebaseUserId$: Observable<string | undefined> = this.firebaseUserIdSubject$.asObservable();

  constructor() { }

  loginToAuth0() {
    this.auth0UserSubject$.next({name: 'Pretend_Auth0_user'});
  }

  logout() {
    this.auth0UserSubject$.next(undefined);
    this.firebaseTokenSubject$.next(undefined);
    this.firebaseUserIdSubject$.next(undefined);
  }

  getTokenFromLambda() {
    this.firebaseTokenSubject$.next("MyPretendToken_ABCD123EFG456");
  }

  loginToFirebase() {
    this.firebaseUserIdSubject$.next("Pretend_Firebase_user");
  }
}
