import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log("login form opened");
    // Get the modal
    // var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  }

  goToDashboard() {
    this.route.navigate(['/dashboard']);
  }

  isSuccess: boolean = false;
  isFalied: boolean = false;

  userLogin() {
    let userData = {
      username: this.username,
      password: this.password
    }
    console.log("userdata is:", userData);
    this.authService.userLogin(userData).subscribe(res => {
      if(res['success'] == true) {
        console.log("Login successful", res);
        localStorage.setItem('token', res['token']);
        sessionStorage.setItem('id', res['id']);
        sessionStorage.setItem('role', res['role']);
        this.isSuccess = true;
        setInterval(()=>{
          this.route.navigate(['/dashboard']);
        },1000)
      } else {
        console.log('Login failed');
        this.isFalied = true;
      }
    })
  }

}
