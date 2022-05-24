import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Location } from '@angular/common';

import { CommonService } from 'src/app/services/common.service';
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
tab1:boolean  = false;
tab2:boolean = false;
tab3:boolean = false;
tab4:boolean = false;
tab5:boolean = false;
tab6:boolean = false;
Userinfobyid: any;
Userinfodata: any;
userdata:any

  constructor(public router:Router , public commanservice: CommonService , public route : ActivatedRoute
    ,   private location: Location,
    ) { 

      this.Userinfodata = localStorage.getItem('u_info');
      // console.log("================",JSON.parse(this.Userinfodata)?._id)
      this.userdata = JSON.parse(this.Userinfodata)._id
      this.getuserdetails()
    this.tab4 = true
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
    // console.log(this.tab4)


  }
  else if(this.data == "Home"){

    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = false
    this.tab5 = true
    this.tab6 = false

  }
  else if(this.data == "Users"){  
    
    this.tab1 = false
    this.tab2 = false
    this.tab3 = false
    this.tab4 = false
    this.tab5 = false
    this.tab6 = true
    
    console.log("---",this.tab6 , this.data)
  }
  }


  async getuserdetails(){
    var data ={
      user_id:this.userdata
    }
    this.commanservice.getUserInfoById(data.user_id).subscribe(
      res => {
        Notiflix.Loading.remove();
        this.Userinfobyid = res.data
        // console.log('this.Userinfobyid', this.Userinfobyid);
        if (!res.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {     
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }

  async logout(){
    localStorage.clear ()
    this.router.navigateByUrl("/admin/admin-login")
  }



  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
      $('#body').toggleClass('active');
  });
  // this.route.queryParams.subscribe(params => {
  //   console.log(params)
  //   var uid = params.uid;
  //   console.log("suraj hua madhham",uid)
  //   if (uid === null || uid === undefined) {
  //     Notiflix.Notify.failure('This user is currently not available.');
  //     // this.location.back()
  //   } else {
  //     this.commanservice.getUserInfoById(uid).subscribe(
  //       res => {
  //         this.Userinfodata = res.data
  //         console.log('###user-info', this.Userinfodata);
 
  //       },
  //       err => {        
  //         Notiflix.Notify.failure(err.error.message);
  //       }
  //     );
  //   }
  // });
  // }
  }
}
