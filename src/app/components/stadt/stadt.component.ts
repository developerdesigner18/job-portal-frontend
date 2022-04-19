import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadt',
  templateUrl: './stadt.component.html',
  styleUrls: ['./stadt.component.scss']
})
export class StadtComponent implements OnInit {
  imageObject = [{
    image: "/assets/img/_RD3_Home_Slider2_stadt.jpg",
    thumbImage: '/assets/img/_RD3_Home_Slider2_stadt.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/_RD3_Home_Slider2_stadt.jpg",
    thumbImage: '/assets/img/_RD3_Home_Slider2_stadt.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/_RD3_Home_Slider2_stadt.jpg",
    thumbImage: '/assets/img/_RD3_Home_Slider2_stadt.jpg',
    // title: 'RD3 lOGO'
  }, 
  // {
  //   image: "/assets/img/LOGO@2x.png",
  //   thumbImage: '/assets/img/LOGO@2x.png',
  //   title: 'RD3 lOGO'
  // },
  // {
  //   image: "/assets/img/LOGO@2x.png",
  //   thumbImage: '/assets/img/LOGO@2x.png',
  //   title: 'RD3 lOGO'
  // },
  // {
  //   image: "/assets/img/LOGO@2x.png",
  //   thumbImage: '/assets/img/LOGO@2x.png',
  //   title: 'RD3 lOGO'
  // },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
