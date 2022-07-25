import {Injectable} from '@angular/core';
import {API_CONSTANTS} from "../util/web-api.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(register: any) {
    return this.http.post<any>(API_CONSTANTS.registerUrl, register);
  }

  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('token');
    return this.http.get<User>(API_CONSTANTS.loginUrl);
  }
}
