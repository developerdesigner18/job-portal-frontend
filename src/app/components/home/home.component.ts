import { Component, ViewChild , OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult: any;
  // @Output() imageClick: any;
  @ViewChild('content') content: any;
  tab1: boolean = false;
  tab2:boolean = false;
  // tab3:boolean = false;


  imageObject = [{
    image: "",
    thumbImage: "",
  }];
  
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
  homeInfoDataAll: any[] =[];

  constructor(private router: Router , private modalService: NgbModal, public commanservice: CommonService) {

  }

  async tab1slide(){
    this.tab2 = false
    this.tab1 = true
    // this.tab3 = false
  }

  async tab2slide(){
    this.tab2 = true
    this.tab1 = false
    // this.tab3 = false
  }

  async tab3slide(){
    // this.tab3 = true
    this.tab2 = false
    this.tab1 = false
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
    
    // var index = event - 1
    // var uriSet = [
    //   {
    //     url: 'https://jobs.rd3.at/jobs/restaurant_volkshauspark'
    //   },
    //   {
    //     url: 'https://jobs.rd3.at/jobs/Careers/42780000000391021/LKW-Fahrer-In-Brauerei-Ried?source=CareerSite'
    //   }
    // ]

    // window.open(uriSet[index]?.url, "_blank");
  }


  openModal(){
    this.modalService.open(this.content, { centered: true });
  }


  ngOnInit(): void {
    this.commanservice.gethomeInfoAll().subscribe(
      res => {
        this.homeInfoDataAll = res.body.data
        console.log("=-=-=-homeInfoDataAll", this.homeInfoDataAll[0].home_images);
        // for(let i=0;i<this.homeInfoDataAll.length;i++){
          for(let j=0;j<this.homeInfoDataAll[0].home_images.length;j++){

            console.log("=--==-this.homeInfoDataAll[i].home_images[j].name", 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name);
            

            this.imageObject[0].image = 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name
            this.imageObject[0].thumbImage = 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name
            // this.homeInfoDataAll.push(image)
          }
        // }
        
      }
    );
    this.tab1 = true
    interval(5000).subscribe((data) => {
      this.tab1 = !this.tab1
      this.tab2 = !this.tab2      
    });
    this.imageObject = [...this.imageObject]
    console.log("=-=-=-this.imageObject", this.imageObject);
    
  }

  getHomeInfoAll(){
    this.commanservice.gethomeInfoAll().subscribe(
      res => {
        this.homeInfoDataAll = res.body.data
        console.log("=-=-=-homeInfoDataAll", this.homeInfoDataAll[0].home_images);
        // for(let i=0;i<this.homeInfoDataAll.length;i++){
          for(let j=0;j<this.homeInfoDataAll[0].home_images.length;j++){

            console.log("=--==-this.homeInfoDataAll[i].home_images[j].name", 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name);
            

            this.imageObject[0].image = 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name
            this.imageObject[0].thumbImage = 'http://localhost:8400'+this.homeInfoDataAll[0].home_images[j].name
            // this.homeInfoDataAll.push(image)
          }
        // }
        
      }
    );
  }

  ngAfterViewInit() {
    // this.openModal();
  }

}
