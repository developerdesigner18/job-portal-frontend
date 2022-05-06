import { Component } from '@angular/core';
import { ActivatedRoute, Router , NavigationEnd, ResolveEnd  } from '@angular/router';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'jobportal';
  name = 'Get Current Url Route Demo';
  data:any;
  constructor(private actroute:ActivatedRoute, private router: Router , private modalService: NgbModal) {

// To get a clicked routes in a console start
    this.router.events.subscribe((routerData) => {
      if(routerData instanceof ResolveEnd){ 
        console.log(routerData.url)
         if(routerData.url === 'your url'){
           //Do something
         }
    } 
})
// To get a clicked routes in a console end
    
   }
  

 
  ngOnInit(): void { 

  }
}
