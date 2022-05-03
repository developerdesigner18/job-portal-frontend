import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.fragment.subscribe((fragment: string) => {
    //   const id = document.getElementById(fragment)
    //   if (fragment && id != null) {
    //     id.scrollIntoView();
    //   }
    // }); 
  }

}
