import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppComponent } from "../../app.component"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class HeaderComponent implements OnInit {

 isMenuOpen = true;
 urlSegment: any;

  constructor(public router:Router) {
   }

// Out side elemet click function start----

   onClick() {
    console.log("called out side");
    this.isMenuOpen = false;
  }

   // Out side elemet click function end----


async toggleMenu(event:any){
  event.stopPropagation();
  this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.isMenuOpen = false
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
