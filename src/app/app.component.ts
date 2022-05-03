import { Component } from '@angular/core';
import { ActivatedRoute, Router , NavigationEnd  } from '@angular/router';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobportal';
  name = 'Get Current Url Route Demo';
  data:any;

  constructor(private actroute:ActivatedRoute, public router: Router) { }
  
  scrollFunc() {
    console.log('here');
    
    this.actroute.fragment.subscribe((fragment: string) => {
      console.log("fragemnet============",fragment)
      const element = document.getElementById(fragment)
      console.log('fragment', fragment, 'element', element);
      
      if (fragment && element != null) {
        element.scrollIntoView();
      }
    });
  }

  ngOnInit(): void { 
    setTimeout(() => {
      this.scrollFunc();
    }, 4000)
  }
}
