import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
