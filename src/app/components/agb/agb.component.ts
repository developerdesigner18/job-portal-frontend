import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agb',
  templateUrl: './agb.component.html',
  styleUrls: ['./agb.component.scss']
})
export class AgbComponent implements OnInit {
  management_check: boolean = true;
  advert_check: boolean;
  travel_check: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  checkboxes(box_name: any) {
    console.log(box_name);
    if (box_name == 'management_check') {
      this.management_check = true
      this.advert_check = false
      this.travel_check = false
    } else if (box_name == 'advert_check') {
      this.management_check = false
      this.advert_check = true
      this.travel_check = false
    } else if (box_name == 'travel_check'){
      this.management_check = false
      this.advert_check = false
      this.travel_check = true
    }
  }

}
