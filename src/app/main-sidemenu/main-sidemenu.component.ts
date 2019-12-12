import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-sidemenu',
  templateUrl: './main-sidemenu.component.html',
  styleUrls: ['./main-sidemenu.component.css']
})
export class MainSidemenuComponent implements OnInit {

  pageType: any;

  constructor(public _route: ActivatedRoute) { }

  ngOnInit() {
    this.pageType = this._route.snapshot.url[0].path;
    console.log(this.pageType);
  }

  w3_open() {
    // document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("openNav").style.display = 'none';
  }

  // w3_open() {
  //   document.getElementById("main").style.marginLeft = "15%";
  //   document.getElementById("mySidebar").style.width = "15%";
  //   document.getElementById("mySidebar").style.display = "block";
  //   document.getElementById("openNav").style.display = 'none';
  // }

  // w3_close() {
  //   document.getElementById("main").style.marginTop = "15%";
  //   document.getElementById("main").style.marginLeft = "0%";
  //   document.getElementById("mySidebar").style.display = "none";
  //   document.getElementById("openNav").style.display = "inline-block";
  // }

}
