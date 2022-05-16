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
data:any;
@Input() parent: any; // decorate the property with @Input()
tab1 : boolean  = false;
tab2: boolean = false;
tab3: boolean = false;
tab4:boolean = false;
tab5:boolean = false;
tab6:boolean = false;

  constructor(public router:Router) { 
    this.tab1 = true
  }

   clickdata(event:any){
    this.data = event.target.innerText
    if(this.data == "Login"){
      this.tab1 = true
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
      this.tab5 = false
      this.tab6 = false

  }else if(this.data == "Jobs"){
    this.tab1 = false
    this.tab2 = true
    this.tab3 = false
    this.tab4 = false
    this.tab5 = false
    this.tab6 = false

  }
  else if(this.data == "Stadt"){
    
    this.tab1 = false
    this.tab2 = false
    this.tab3 = true
    this.tab4 = false
    this.tab5 = false
    this.tab6 = false

  }
  else if(this.data == "Sports"){
    
    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = true
    this.tab5 = false
    this.tab6 = false

  }
  else if(this.data == "Users"){
    
    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = false
    this.tab5 = false
    this.tab6 = true

  }
  else if(this.data == "Home"){
    
    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = false
    this.tab5 = true
    this.tab6 = false

  }
  }


  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
      $('#body').toggleClass('active');
  });
  }

}
