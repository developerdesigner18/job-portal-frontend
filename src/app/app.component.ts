import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ResolveEnd,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';

// declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Jobportal,Sportmarketing,Stadtmarketing';
  name = 'Get Current Url Route Demo';
  data: any;
  parent:any;

  constructor(
    private actroute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private titleService: Title,
    private meta: Meta
  ) {
    // To get a clicked routes in a console start
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        console.log(routerData.url);
        this.parent = routerData.url
        localStorage.setItem("url",routerData.url)
        if (routerData.url === 'your url') {
          //Do something
        }
      }
    });
    // To get a clicked routes in a console end
  }

  ngOnInit(): void {
    // this.titleService.setTitle(this.title);
    // this.meta.addTags([
    //   { name: 'keywords', content: 'jobportal,sportmarketing,stadtmarketing' },
    //   {
    //     name: 'description',
    //     content: 'jobportal,sportmarketing,stadtmarketing',
    //   },
    //   { name: 'robots', content: 'index, follow' },
    // ]);

    // const writer = this.meta.getTag('name=description');
    // console.log(writer);
    // this.meta.updateTag({ name: 'description', content: 'Harry Potter' });
    // this.meta.removeTag('name="writer"');
  }
}
