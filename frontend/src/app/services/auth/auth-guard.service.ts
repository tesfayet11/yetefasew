import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']).then(r => console.log(r));
      return false;
    }
    return true;
  }
}
