import { Component } from '@angular/core';
import { ActivatedRoute, Router , NavigationEnd  } from '@angular/router';
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
  closeResult = '';
  constructor(private actroute:ActivatedRoute, private router: Router , private modalService: NgbModal) { }
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // scrollFunc() {
  //   // console.log('here');
    
  //   this.actroute.fragment.subscribe((fragment: string) => {
  //     // console.log("fragemnet============",fragment)
  //     const element = document.getElementById(fragment)
  //     console.log('fragment', fragment, 'element', element);
  //     // $('#sportsPriese').scrollIntoView();
  //     if (fragment != null && element != null) {
  //       element.scrollIntoView();
  //     }
  //   });
  // }

  ngOnInit(): void { 
    // setTimeout(() => {
    //   this.scrollFunc();
    // }, 4000)
  }
}
