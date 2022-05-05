import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router, private actroute : ActivatedRoute) { 



  }


  scrollFunc(): void {
    let fragment = window.location.hash.slice(1)
    let element = document.getElementById(fragment)
    // console.log(fragment , element)
    element?.scrollIntoView()
  }

  ngOnInit(): void {
      this.actroute.fragment.subscribe(fragment => { 
        setTimeout(() => {
              this.scrollFunc();
          }, 300);
});

  }



}
