import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sports-data',
  templateUrl: './sports-data.component.html',
  styleUrls: ['./sports-data.component.scss']
})
export class SportsDataComponent implements OnInit {
  BASE_URI: string;
  travelInfoDataAll: any;
  travelInfoById: any;
  travelInfoForm: FormGroup;
  show_form: boolean = false;
  url: any;
  format: any;
  cover_image_url: any;
  travel_images_url: any = [];
  cover_image_travel: any;
  travel_images: any = [];

  constructor(public formbuilder: FormBuilder, public commanservice: CommonService) {
    this.BASE_URI = environment.apiUrl;
  }


  submitdata(){
    if (this.travelInfoForm.pristine && !this.cover_image_travel) {
      return;
    }

    const { value } = this.travelInfoForm;
    value.cover_image_travel = this.cover_image_travel

    console.log(value);

    var fd = new FormData();
    fd.append('name', value.name);
    fd.append('description', value.description);

    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )

    this.commanservice.inserttravelInfo(fd).subscribe(
      res => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getBoatInfoAll()
        if (!res.body.success) { Notiflix.Notify.failure(res.body.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
  }

  getBoatInfoAll() {
    this.commanservice.gettravelInfoAll().subscribe(
      res => {
        this.travelInfoDataAll = res.data
        this.travelInfoForm.patchValue(res.data.content)        
        console.log('###edit-travel-info', this.travelInfoDataAll);
        if (!res.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {        
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }


  ngOnInit(): void {
    this.travelInfoForm = this.formbuilder.group({
      _id: [null, Validators.required],
      travel_info: this.formbuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
      })
    });
  }

}
