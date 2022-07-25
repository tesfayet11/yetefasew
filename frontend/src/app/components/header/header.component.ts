import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']).then(r => console.log(r));
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }
}
