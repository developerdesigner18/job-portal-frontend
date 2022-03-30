import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from "../../app.component"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 menu1:boolean = false; 
 menu2:boolean = false; 
 menu3:boolean = false; 
 menu4:boolean = false; 

  constructor(public router:Router) {

   }

async menudata1(){
    console.log("called",this.menu1)
    this.menu1 = !this.menu1
  }

async menudata2(){
    console.log("called",this.menu2)
    this.menu2 = !this.menu2
  }

async menudata3(){
    console.log("called",this.menu3)
    this.menu3 = !this.menu3
  }
async menudata4(){
    console.log("called",this.menu4)
    this.menu4 = !this.menu4
  }
  

  ngOnInit(): void {
    if(this.router.url == "/"){
    this.menu1 = false
    }
    else if(this.router.url == "/stadt"){
      this.menu2 = false
    }
    this.menu3 = false
    this.menu4 = false
  
  }
  ngAfterViewInit(): void{

  }


}
