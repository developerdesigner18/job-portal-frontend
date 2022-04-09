import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject = [{
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  }, {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  }, {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  }, {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  },
  {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  },
  {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  }
  ];

  constructor(private router: Router) {

  }






  ngOnInit(): void {
  }

}
