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
 
    image: '/assets/img/Gastro Haring.png',
    thumbImage: '/assets/img/Gastro Haring.png',
    title: 'Partner #1 "Restaurant Volkshaus"'
  },
  {
    image:  '/assets/img/rieder-bier.png',
    thumbImage: '/assets/img/rieder-bier.png',
    title: 'Partner #2 "Rieder Bier" needs to link to'
  },
  {
    image: '/assets/img/volkshauspark.png',
    thumbImage: '/assets/img/volkshauspark.png',
    title: 'Partner #3 "Gastro Haring"'
  },
  {
    image: '/assets/img/Gastro Haring.png',
    thumbImage: '/assets/img/Gastro Haring.png',
    title: 'Partner #1 "Restaurant Volkshaus"'
  },
  {
    image: '/assets/img/rieder-bier.png',
    thumbImage: '/assets/img/rieder-bier.png',
    title: 'Partner #2 "Rieder Bier" needs to link to'
  },
  {
    image: '/assets/img/volkshauspark.png',
    thumbImage: '/assets/img/volkshauspark.png',
    title: 'Partner #3 "Gastro Haring"'
  },
  ];
  currentUrl: any;
  sliceurl: any;
  constructor(private router:Router , private activatedroute:ActivatedRoute) {
    this.sliceurls()
   }


  async imageClickRedirect(event: any) {
    console.log(event);
    if(event == 0 || event == 3){
      return
    }
    else if(event == 1 || event == 4){
      let url2 = "https://jobs.rd3.at/jobs/Careers/42780000000391021/LKW-Fahrer-In-Brauerei-Ried?source=CareerSite"
      window.open(url2, "_blank");
    }
    else if(event == 2 || event == 5){
      let url1 = "https://jobs.rd3.at/jobs/restaurant_volkshauspark"
      window.open(url1, "_blank"); 
    }
  }


  sliceurls(){
    console.log( window.location.href);
    this.currentUrl = window.location.href
    this.sliceurl = this.currentUrl;
    this.sliceurl = this.sliceurl.slice(0, -5); 
    console.log(this.sliceurl); 
  }

  Arbeitgerber(){    
    window.open(this.sliceurl + '/assets/html/RD3-Jobs-Infoblatt-Arbeitgeber.html', '_blank')
  }

  Bewerber(){    
    window.open(this.sliceurl + '/assets/html/RD3-Jobs-Infoblatt-Bewerber.html', '_blank')
  }

  
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
