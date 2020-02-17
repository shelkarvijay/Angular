import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../customer/login/model/user-info';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(
    private router: Router
  ) { }

  public setUserInfo(userInfo: UserInfo) {

    const localUserInfo = localStorage.getItem('currentUserInfo');
    console.log('in token storage', userInfo);
    if (userInfo) {
      // const bytes = CryptoJS.AES.decrypt(userInfo, this.ENCRYPTION_KEY);
      // const userInfoDec = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      localStorage.setItem('currentUserInfo', userInfo.email);
      return userInfo;
    }
  }
}
