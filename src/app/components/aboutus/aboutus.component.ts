import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class aboutusComponent implements OnInit {
  image:any[] = ["/assets/img/Rectangle_98.png",
    "/assets/img/Rectangle_98_dg.png",
    "/assets/img/Rectangle_98_dg@2x.png",
    "/assets/img/Rectangle_98_cy.png",
   ]
  pagination: number = 1;

  constructor() {
    // for (let i = 1; i <= 10; i++) {
    //   this.collection.push(`item ${i}`);
    // }
  }

  ngOnInit(): void {
  }

}
