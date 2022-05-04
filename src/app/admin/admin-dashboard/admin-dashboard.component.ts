import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
      $('#body').toggleClass('active');
  });
  }

}
