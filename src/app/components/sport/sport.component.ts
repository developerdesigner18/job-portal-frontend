import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(
    public activatedRoute: ActivatedRoute,
    public router:Router,
    private modalService: NgbModal

  ) { }
  closeResult = '';


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
