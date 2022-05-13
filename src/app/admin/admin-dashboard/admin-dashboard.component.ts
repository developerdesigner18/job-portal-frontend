import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
// urldata:any;
@Input() parent: any; // decorate the property with @Input()


  constructor(public router:Router) { 
    // this.urldata = localStorage.getItem("url")
    // console.log("=====================",this.urldata)

  }

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
      $('#body').toggleClass('active');
  });
  }

}
