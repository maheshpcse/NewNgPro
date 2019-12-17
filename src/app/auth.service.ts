import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public apiUrl = `http://localhost:3000/api/`;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(ApiService.API.GETDATA);
  }

  userLogin() {
    return this.http.get(ApiService.API.LOGIN);
  }

  userSignup() {
    return this.http.get(ApiService.API.SIGNUP);
  }

  getUserToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return sessionStorage.getItem('id');
  }

  getUserRole() {
    return sessionStorage.getItem('role');
  }

  getUserPayload() {
    var token = this.getUserToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(): boolean {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  getUserProfile(id) {
    return this.http.get(ApiService.API.GET_USER_PROFILE, id);
  }
}
