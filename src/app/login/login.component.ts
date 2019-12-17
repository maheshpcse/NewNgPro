import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router
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
    this.route.navigate(['/dashboard'])
  }

}
