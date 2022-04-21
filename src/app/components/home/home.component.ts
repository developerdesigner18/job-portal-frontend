import { Component, ViewChild , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: any;
  @ViewChild('content') content: any;
  tab1: boolean = false;
  tab2:boolean = false;
  tab3:boolean = false;


  imageObject = [{
    image: "/assets/img/RD3_Home_Slider3_jobs.jpg",
    thumbImage: '/assets/img/RD3_Home_Slider3_jobs.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "/assets/img/_RD3_Home_Slider2_stadt.jpg",
    thumbImage: 'assets/img/_RD3_Home_Slider2_stadt.jpg',
    // title: 'RD3 lOGO'
  }, {
    image: "assets/img/RD3_Home_Slider3_sport_1600.jpg",
    thumbImage: 'assets/img/RD3_Home_Slider3_sport_1600.jpg',
    // title: 'RD3 lOGO'
  }, 
 
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

  constructor(private router: Router , private modalService: NgbModal) {

  }

  async tab2slide(){
    console.log(this.tab2)
    this.tab2 = true
    this.tab1 = false
    this.tab3 = false
  }

  async tab3slide(){
    this.tab3 = true
    this.tab2 = false
    this.tab1 = false
  }

  openModal(){
    this.modalService.open(this.content, { centered: true });
  }


  ngOnInit(): void {
    this.tab1 = true
  }

  ngAfterViewInit() {
    this.openModal();
  }

}
