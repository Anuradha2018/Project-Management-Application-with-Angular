import { Router } from '@angular/router';
import { LoginService } from './../shared/services/login.service';
import { Login } from './../models/login';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginModel = new Login();
}

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.loginModel.username);
    console.log(this.loginModel.password);
    const isLogin = this.loginService.loginUser(this.loginModel);
    if (isLogin) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
