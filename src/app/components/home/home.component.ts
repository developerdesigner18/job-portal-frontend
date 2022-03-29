import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject = [{
    image: '/assets/home/RD3_Home_Slider3_jobs.jpg',
    thumbImage: '/assets/home/RD3_Home_Slider3_jobs.jpg',
    title: 'test1'
},  
{
    image: 'src\assets\img\home\RD3_Home_Slider3_sport_1600.jpg',
    thumbImage: '',
    title: 'test2'
},
{
    image: 'src\assets\img\home\_RD3_Home_Slider2_stadt.jpg',
    thumbImage: '',
    title: 'test3'
}
];

  constructor(private router:Router) {

   }




  

  ngOnInit(): void {
  }

}
