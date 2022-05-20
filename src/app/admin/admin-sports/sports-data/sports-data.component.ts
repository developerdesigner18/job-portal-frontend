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
  travelInfoDataAll: any = [];
  travelInfoById: any;
  travelInfoForm: FormGroup;
  show_form: boolean = false;
  url: any;
  format: any;
  cover_image_url: any;
  travel_images_url: any = [];
  cover_image_travel: any;
  travel_images: any = [];
  userdata: any;
  uinfo: any;

  constructor(public formbuilder: FormBuilder, public commanservice: CommonService) {
    this.BASE_URI = environment.apiUrl;
  }

  ngOnInit(): void {
    this.travelInfoForm = this.formbuilder.group({
      _id: [null, Validators.required],
      travel_info: this.formbuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
      })
    });
    this.uinfo = localStorage.getItem('u_info');
    // console.log("================",JSON.parse(this.userdata))
    this.userdata = JSON.parse(this.uinfo)
    this.getTravelInfoAll()
  }

  getTravelInfoAll() {
    this.commanservice.gettravelInfoAll().subscribe(
      res => {
        this.travelInfoDataAll = res.data
        console.log("all travel data",this.travelInfoDataAll)
        this.travelInfoForm.patchValue(res.data.content)        
        // console.log('###edit-travel-info', this.travelInfoDataAll);
        if (!res.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {        
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }

  getTravelinfobyid(boat_id: any) {
    this.commanservice.getTravelinfobyid(boat_id).subscribe(
  res => {
    Notiflix.Loading.remove();
    this.travelInfoById = res.data
    console.log('this.travelInfoById', this.travelInfoById.cover_image_travel);
    
    this.travelInfoForm.patchValue(res.data)
    console.log('###boatInfoById', this.travelInfoById);
    if (!res.success) { Notiflix.Notify.failure(res.error); }
  },
  err => {        
    Notiflix.Notify.failure(err.error?.message);
  }
);
}

  getControlValidation(key: string): boolean {
    const { invalid, touched, dirty } = this.travelInfoForm.get(key) as FormGroup;
    // console.log(key);
    return invalid && (touched || dirty);
  }

  onCoverImageUpload(event: any) {
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.cover_image_travel = file
        reader.onload = (event) => {
          this.cover_image_url = (<FileReader>event.target).result;
        }
      }
    }
    Notiflix.Loading.remove();
  }

  onBoatImagesUpload(event: any) {
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){        
        this.travel_images.push(file)
        reader.onload = (event) => {
          this.travel_images_url.push((<FileReader>event.target).result);
        }
      }
    }    
    Notiflix.Loading.remove();
  }

  removeCoverImage() {
    this.cover_image_url = undefined
    this.cover_image_travel = undefined
  }

  remove_image(index: any) {
    this.travel_images_url.splice(index, 1)
    this.travel_images.splice(index, 1)
  }
  
  remove_image_all() {
    this.travel_images_url = []
    this.travel_images = []
  }

  resetForm() {
    this.travelInfoForm.reset()
    this.travelInfoById = []
    this.removeCoverImage()
    this.remove_image_all()
    this.show_form = false;
  }


  insertTravelInfo(){
    if (this.travelInfoForm.pristine && !this.cover_image_travel) {
      return;
    }

    const { value } = this.travelInfoForm;
    value.cover_image_travel = this.cover_image_travel

    console.log(value);

    var fd = new FormData();
    fd.append('name', value.travel_info.name);
    fd.append('description', value.travel_info.description);
    fd.append('cover_image_travel', value.cover_image_travel);

    var data = {
      user:this.userdata
    }

    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )

    this.commanservice.inserttravelInfo(fd , data).subscribe(
      res => {
        console.log("response",res)
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getTravelInfoAll()
        if (!res.body.success) { Notiflix.Notify.failure(res.body.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
  }

}
