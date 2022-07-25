import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {User} from '../../model/interfaces/user';
import {Observable, of, shareReplay, tap} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {API_CONSTANTS} from "../../util/web-api.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];
  cachedUser: User = null;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(username:string, password:string ) {
    return this.http.post<User>(API_CONSTANTS.loginUrl, {username, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )
  }



  public isAuthenticated(): boolean {

    const token = this.getToken();
    if(token != null)
      return !this.jwtHelper.isTokenExpired(token);
    return false;
  }

  public getToken(): string | null{
    return  localStorage.getItem('token');
  }

  public collectFailedRequest(request: any): void {
    this.cachedRequests.push(request);
  }

  private setSession(authResult: any) {
    this.cachedUser = authResult.user;
    localStorage.setItem('token', authResult.token);
  }

  logout() {
    this.cachedUser = null;
    localStorage.removeItem('token');
  }

  public getCurrentUser(): User{
    return this.cachedUser;
  }
}
