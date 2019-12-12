import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

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

  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
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

}
