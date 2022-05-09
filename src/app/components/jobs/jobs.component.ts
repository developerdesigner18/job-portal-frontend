import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  imageObject = [{
    image: "/assets/img/RD3_Home_Slider3_jobs.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_jobs.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/RD3_Home_Slider3_jobs.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_jobs.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/RD3_Home_Slider3_jobs.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_jobs.jpg',
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
  
  imagelogo = [{
 
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
  },
  {
    image: "/assets/img/LOGO@2x.png",
    thumbImage: '/assets/img/LOGO@2x.png',
    title: 'RD3 lOGO'
  },
  ];
  constructor(private router:Router , private activatedroute:ActivatedRoute) { }


  first(){
    let url = "https://jobs.rd3.at/jobs"
    window.open(url, "_blank");
  }
  second(){
    let url = "https://jobs.rd3.at/candidateportal"
    window.open(url, "_blank");
  }
  third(){
    let url = "https://jobs.rd3.at/clientportal"
    window.open(url, "_blank");
  }
  fourth(){
    let url = "https://jobs.rd3.at/vendorportal"
    window.open(url, "_blank");
  }
  
  fifth(){
    let url = "mailto:info@rd3.at"
    window.open(url);
  }

  ngOnInit(): void {

  }

}
