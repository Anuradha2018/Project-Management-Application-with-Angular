import { Login } from './../../models/login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  public loginUser(loginModel: Login): boolean {
    if (loginModel.username === 'test@test.com' && loginModel.password === '1234') {
      return true;
    }
    return false;
  }
}
