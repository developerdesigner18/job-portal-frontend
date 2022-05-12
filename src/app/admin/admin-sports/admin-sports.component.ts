import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sports',
  templateUrl: './admin-sports.component.html',
  styleUrls: ['./admin-sports.component.scss']
})
export class AdminSportsComponent implements OnInit {

  constructor() { 
    this.tab1 = true
    this.sidetabs = true
  }
  sidetabs :  boolean = false;
  tab1 : boolean  = false;
  tab2: boolean = false;
  tab3: boolean = false;
  tab4:boolean = false;
  tab5:boolean = false;
  tab6:boolean = false;
  tab7:boolean = false;

  value:any;
  sidetabsclick(event:any){
    this.value = event.target.innerText
    console.log(this.value)
    if(this.value == "Pauschalreisen"){
        this.sidetabs = true
        this.tab1 = true
        this.tab2 = false
        this.tab3 = false
        this.tab4 = false
        this.tab5 = false
        this.tab6 = false
        this.tab7 = false

    }else if(this.value == "Unterkünfte"){
      this.sidetabs = true
      this.tab1 = false
      this.tab2 = true
      this.tab3 = false
      this.tab4 = false
      this.tab5 = false
      this.tab6 = false
      this.tab7 = false

    }
    else if(this.value == "Sportreisen"){
      this.sidetabs = true
      this.tab1 = false
      this.tab2 = false
      this.tab3 = true
      this.tab4 = false
      this.tab5 = false
      this.tab6 = false
      this.tab7 = false

    }
    else if(this.value == "Sprachreisen"){
      this.sidetabs = true
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = true
      this.tab5 = false
      this.tab6 = false
      this.tab7 = false

    }
    else if(this.value == "Schiffsreisen"){
      this.sidetabs = true
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
      this.tab5 = true
      this.tab6 = false
      this.tab7 = false

    }
    else if(this.value == "Camping"){
      this.sidetabs = true
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
      this.tab5 = false
      this.tab6 = true
      this.tab7 = false

    }
    else if(this.value == "Autovermietung"){
      this.sidetabs = true
      this.tab7 = true
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
      this.tab5 = false
      this.tab6 = false

    }
  }

  
  imageObject = [{
    image: "/assets/img/Reise-Empfehlungen.png",
    thumbImage: '/assets/img/Reise-Empfehlungen.png',
  }, {
    image: "/assets/img/Reise-Empfehlungen.png",
    thumbImage: 'assets/img/Reise-Empfehlungen.png',
  }, {
    image: "assets/img/Reise-Empfehlungen.png",
    thumbImage: 'assets/img/Reise-Empfehlungen.png',
  },  {
    image: "assets/img/Reise-Empfehlungen.png",
    thumbImage: 'assets/img/Reise-Empfehlungen.png',
  }, 
 
  ];

  ngOnInit(): void {

  }

}
