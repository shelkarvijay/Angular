import { Injectable } from '@angular/core';
import { UserInfo } from '../customer/login/model/user-info';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserInfo: UserInfo = new UserInfo();
  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  setCurrentUser(userDetails) {
    if (userDetails) {
      this.currentUserInfo.isLoggedIn = userDetails.isLoggedIn;
      this.currentUserInfo.email = userDetails.email;
    }
    console.log('in auth', this.currentUserInfo);
    this.tokenStorage.setUserInfo(this.currentUserInfo);
    // return savedUser;
  }
}
