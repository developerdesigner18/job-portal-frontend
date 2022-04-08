import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-ubreuns',
  templateUrl: './ubreuns.component.html',
  styleUrls: ['./ubreuns.component.scss']
})
export class UbreunsComponent implements OnInit {
  image:any[] = ["/assets/img/Rectangle_98.png",
    "/assets/img/Rectangle_98_dg.png",
    "/assets/img/Rectangle_98_dg@2x.png",
    "/assets/img/Rectangle_98_cy.png",
    "/assets/img/Rectangle_98_cy.png",
    "/assets/img/Rectangle_98@2x.png"]
  pagination: number = 1;

  constructor() {
    // for (let i = 1; i <= 10; i++) {
    //   this.collection.push(`item ${i}`);
    // }
  }

  ngOnInit(): void {
  }

}
