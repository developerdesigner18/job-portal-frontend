import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router, private actroute:ActivatedRoute) { 



  }


  scrollFunc(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          const tree = this.router.parseUrl(this.router.url);
          if (tree.fragment) {
        const element = document.querySelector("#" + tree.fragment);
        if (element) { element?.scrollIntoView(); }
          }
        // let fragment = window.location.hash.slice(1)
        // let element = document.getElementById(fragment)
        // console.log(fragment , element)
        // element?.scrollIntoView()
       }
  });

    // let fragment = window.location.hash.slice(1)
    // let element = document.getElementById(fragment)
    // console.log(fragment , element)
    // element?.scrollIntoView()
  }

  // scrollFunc(fragment: any) {
  //   document.addEventListener("DOMContentLoaded", (event) => { 
  //   // let fragment = this.actroute.snapshot.fragment
  //   let element = document.getElementById(fragment)

  //   console.log(fragment, element);
    
  //   element?.scrollIntoView()
  //   })
  // }

  ngOnInit(): void {
    // document.addEventListener("DOMContentLoaded", (event) => { 
      this.scrollFunc()
    // });    
  }

  // ngOnInit(): void {

  // }

}
