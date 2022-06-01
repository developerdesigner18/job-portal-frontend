import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';
import { environment } from '../../../environments/environment';

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
  ];


  countries = [{
    id: 1, name: 'France'
  },
  {
    id: 2, name: 'Germany'
  },
  {
    id: 3, name: 'Italy'
  },
  ];
  travelInfoDataAll: any = [];
  BASE_URI: string;

  
  constructor(
    public activatedRoute: ActivatedRoute,
    public router:Router,
    private modalService: NgbModal,
    private commanservice:CommonService

  ) { 
    this.BASE_URI = environment.apiUrl;

    this.getTravelInfoAll()
  }
  closeResult = '';

  redirectUrl(url: string) {
    window.open(url, '_blank')
  }

  open1(content1:any) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open2(content2:any) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open3(content3:any) {
    this.modalService.open(content3, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open4(content4:any) {
    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getTravelInfoAll() {
    this.commanservice.gettravelInfoAll().subscribe(
      res => {
        this.travelInfoDataAll = res.data
        console.log("all travel data",this.travelInfoDataAll)

        if (!res.success) { Notiflix.Notify.failure(res.error);  }
        
      },
      err => {        
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }

  getselectvalue(event:any){
    // console.log("============",event.taget.value);
    console.log("============",event);
    
  }


  forms(){
    let url = "https://forms.zohopublic.eu/rd3/form/RD3SportlerPoolAufnahmeAntrag/formperma/y9Pd6AdP2SSQbxOxSno6KSq4-IzzAAeEXEktieDXaaY"
    window.open(url, "_blank");
  }

  forms2(){
    let url = "https://zfrmz.eu/3rmRFu9862EgFSeHxlaD"
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
