import {Inject, Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(@Inject('BASE_API_URL') private baseUrl: string, public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");


    if (token) {
      const cloned = request.clone({
        url: `${this.baseUrl}${request.url}`,
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });

      return next.handle(cloned);
    }
    else {
      const cloned = request.clone({
        url: `${this.baseUrl}${request.url}`
      });
      return next.handle(cloned);
    }
  }
}
