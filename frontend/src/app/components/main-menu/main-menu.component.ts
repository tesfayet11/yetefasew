import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/interfaces/user";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  fullName = 'George Burdell (YellowJacket1)';
  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }



  navigateTo(page:String) {
    this.router.navigate([page]).then(r => console.log(r));
  }

  getUser(): User {
    return this.authService.getCurrentUser();
  }
}
