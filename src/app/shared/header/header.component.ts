import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
 urlSegment: any;

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
    // this.menu1 = false;
    // this.menu2 = false
    // this.menu3 = false
    // this.menu4 = false
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.urlSegment = event.url.split('/')[0]
        this.urlSegment = event.url.split('#')[0]
        
        console.log(event.url);
      }
    })

    
  }
  ngAfterViewInit(): void{

  }
  ngOnDestroy(): void{

  }


}
