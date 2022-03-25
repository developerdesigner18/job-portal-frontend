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
  pathName: any

  constructor(private actroute:ActivatedRoute, public router: Router) {
    router.events.subscribe((res) => {
      this.pathName = window.location.pathname
      // console.log(this.pathName);
    })
    
}

}
