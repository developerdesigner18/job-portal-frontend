import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
env:any;
  constructor(public router:Router, private actroute : ActivatedRoute) { 
    this.env = environment.production ? 'https://www.rd3.at' : 'http://localhost:8000'
    // console.log("===========",this.env)


  }


  sitemap(){
  if(this.env=="https://www.rd3.at") {
    let url = "https://www.rd3.at/sitemap.xml"
    window.open(url, "_blank");
  } 
  else{
    let url = "http://localhost:400/sitemap.xml"
    window.open(url, "_blank");
  }
  }


  scrollFunc(): void {
    let fragment = window.location.hash.slice(1)
    let element = document.getElementById(fragment)
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
