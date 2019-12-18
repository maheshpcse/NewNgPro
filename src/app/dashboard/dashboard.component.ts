import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  courses: any = [];
  course: any;

  isValid: boolean = false;
  minError: any = '';

  constructor(
    public _sharedService: SharedService,
    private route: Router
    ) { }

  ngOnInit() {
    console.log("dashboard page is opened");
    this.courses = ['Node', 'Angular', 'Express', 'Mongodb'];
  }

  getMinValue(val: any) {
    let x = val;
    if (x == '' || x == null) {
      this.isValid = true;
      this.minError = 'minValue is required';
    }
    else if (x < 0 || x > 100) {
      this.isValid = true;
      this.minError = 'minValue should be between 1 and 100';
    }
    else {
      this.isValid = false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('role');
    this.route.navigate(['']);
  }

}
