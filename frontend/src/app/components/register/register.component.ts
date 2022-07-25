import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }

  registrationForm = this.formBuilder.group({
    email:[''],
    nickName:[''],
    password: [''],
    firstName: [''],
    lastName: [''],
    postalCode: ['']
  })


  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registrationForm.value)
    const val = this.registrationForm.value;


    if(this.registrationForm.valid) {
      this.userService.register(val).subscribe(res =>{
        console.log(res);
        this.router.navigate(['login']);
      });
    }
    else {
      this.router.navigateByUrl('login');
    }

  }
}
