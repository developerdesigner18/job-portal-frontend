import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public router:Router, private actroute:ActivatedRoute) { }

  scrollFunc() {
    let fragment = this.actroute.snapshot.fragment
    let element = document.getElementById(fragment)
    element?.scrollIntoView()
  }

  ngOnInit(): void {
  }

}
