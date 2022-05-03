import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  imageObject = [{
    image: "/assets/img/RD3_Home_Slider3_sport_1600.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_sport_1600.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/RD3_Home_Slider3_sport_1600.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_sport_1600.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/RD3_Home_Slider3_sport_1600.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_sport_1600.jpg',
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
  constructor(
    public activatedRoute: ActivatedRoute,
    public router:Router
  ) { }

  forms(){
    let url = "https://forms.zohopublic.eu/test1001dds/form/ContactUs/formperma/-VD_D7umKbIWq6Yx0MMlEJSWLCLb_vRCxeX4yLOQkEE"
    window.open(url, "_blank");
  }

  ngOnInit(): void {
    // this.activatedRoute.fragment.subscribe((fragment: string) => {
    //   const id = document.getElementById(fragment)
    //   if (fragment && id != null) {
    //     id.scrollIntoView();
    //   }
    // });   
  }

}
