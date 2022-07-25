import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
  }

  loginForm = this.formBuilder.group({
    username:['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  logInUser() {
    const val = this.loginForm.value;

    if(val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(res =>{
        console.log(res);
        this.router.navigate(['main-menu']);
      });
    }
    else {
      this.router.navigateByUrl('login');
    }
  }

  registerUser() {
    this.router.navigate(['register']).then(r => console.log(r));
  }

  logOutUser(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
