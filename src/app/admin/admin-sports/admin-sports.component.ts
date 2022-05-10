import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sports',
  templateUrl: './admin-sports.component.html',
  styleUrls: ['./admin-sports.component.scss']
})
export class AdminSportsComponent implements OnInit {

  constructor() { }

  
  imageObject = [{
    image: "/assets/img/Reise-Empfehlungen.png",
    thumbImage: '/assets/img/Reise-Empfehlungen.png',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/Reise-Empfehlungen.png",
    thumbImage: 'assets/img/Reise-Empfehlungen.png',
    // title: 'RD3 lOGO'
  }, {
    image: "assets/img/Reise-Empfehlungen.png",
    thumbImage: 'assets/img/Reise-Empfehlungen.png',
    // title: 'RD3 lOGO'
  }, 
 
  ];

  ngOnInit(): void {
  }

}
