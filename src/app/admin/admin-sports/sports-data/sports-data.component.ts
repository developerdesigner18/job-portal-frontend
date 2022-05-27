import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';
import { environment } from '../../../../environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-sports-data',
  templateUrl: './sports-data.component.html',
  styleUrls: ['./sports-data.component.scss'],
  animations: [
    trigger('enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity:0})) 
      ])
    ])
  ],
})
export class SportsDataComponent implements OnInit {
  BASE_URI: string;
  travelInfoDataAll: any = [];
  travelInfoById: any;
  travelInfoForm: FormGroup;
  show_form: boolean = true;
  url: any;
  format: any;
  cover_image_url: any;
  travel_images_url: any = [];
  cover_image_travel: any;
  travel_images: any = [];
  userdata: any;
  uinfo: any;
  utoken: any;
  isSubmitted = false;

  fiterdata :  any = ['Pauschalreisen', 'Unterkunfte', 'Sportreisen', 'Sprachreisen' , 'Schiffsreisen' , 'Camping' , 'Autoveimičtung']

  constructor(public formbuilder: FormBuilder, public commanservice: CommonService) {
    this.BASE_URI = environment.apiUrl;
  }
  
  changeFilteroption(e:any) {
    // console.log(e)
    // console.log(e.target.value)
    var data = e.target.value
    data = data.substring(3);
    console.log(data)
    this.filteroptions?.setValue(data, {
      onlySelf: true
    })
  }

  get filteroptions() {
    return this.travelInfoForm.get('filteroptions');
  }

  ngOnInit(): void {
    this.travelInfoForm = this.formbuilder.group({
      _id: [null, Validators.required],
      filteroptions : ["", Validators.required],
      travel_info: this.formbuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        Url: ["", Validators.required],
      }),
    });
    this.uinfo = localStorage.getItem('u_info');
    this.utoken = localStorage.getItem('auth_token');
    this.userdata = JSON.parse(this.uinfo)
    this.getTravelInfoAll()
  }

  getControlValidation(key: string): boolean {
    const { invalid, touched, dirty } = this.travelInfoForm.get(key) as FormGroup;
    // console.log(key);
    return invalid && (touched || dirty);
  }

  getTravelInfoAll() {
    this.commanservice.gettravelInfoAll().subscribe(
      res => {
        // this.travel_id = res.data._id
        this.travelInfoDataAll = res.data
        // this.travelInfoDataAll = []
        console.log("all travel data",this.travelInfoDataAll)
        this.travelInfoForm.patchValue(res.data)        
        // console.log('###edit-travel-info', this.travelInfoDataAll);
        if (!res.success) { Notiflix.Notify.failure(res.error);  }
        
      },
      err => {        
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }

  getTravelinfobyid(travel_id: any) {
    this.commanservice.getTravelinfobyid(travel_id).subscribe(
  res => {
    Notiflix.Loading.remove();
    this.travelInfoById = res.data
    // console.log('this.boatInfoById', this.boatInfoById.boat_images);

    this.travelInfoForm.patchValue(res.data)
    console.log('###travelInfoById', this.travelInfoById.length);
    if (!res.success) { Notiflix.Notify.failure(res.error); }
  },
  err => {        
    Notiflix.Notify.failure(err.error?.message);
  }
);
}

insertTravelInfo(){
  this.travelInfoForm.reset()
  this.travelInfoById = []
  this.removeCoverImage()
  this.remove_image_all()
  this.show_form = true;

}

resetForm() {
  this.travelInfoForm.reset()
  this.travelInfoById = []
  this.removeCoverImage()
  this.remove_image_all()
  this.show_form = false;
}


 uppdatetravelinfo(travel_id:any){
  this.show_form = true;
  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  this.getTravelinfobyid(travel_id)
}

// changeBoatStatus(travel_id: any, status: any) {
//   Notiflix.Loading.standard({
//     cssAnimationDuration: 2000,
//     backgroundColor: '0, 0, 0, 0.0',
//   },
//   )
//   status == 'active' ? status = 'inactive' : status = 'active';
//   this.editBoatInfoService.changeBoatStatus(travel_id, status).subscribe(
//     res => {
//       Notiflix.Loading.remove();
//       Notiflix.Notify.success(res.body.message);        
//       this.getBoatInfoAll()
//       if (!res.body.success) { Notiflix.Notify.failure(res.error); }
//     },
//     err => {
//       Notiflix.Loading.remove();
//       Notiflix.Notify.failure(err.error?.message);
//     }
//   )
// }

// deleteBoatImage(travel_id: any, image_id: any) {
//   Notiflix.Loading.standard({
//     cssAnimationDuration: 2000,
//     backgroundColor: '0, 0, 0, 0.0',
//   },
//   )
//   this.commanservice.deleteBoatImage(travel_id, image_id).subscribe(
//     res => {
//       Notiflix.Loading.remove();
//       Notiflix.Notify.success(res.body.message);        
//       this.getBoatInfoById(travel_id)
//       if (!res.body.success) { Notiflix.Notify.failure(res.error); }
//     },
//     err => {
//       Notiflix.Loading.remove();
//       Notiflix.Notify.failure(err.error?.message);
//     }
//   )
// }

async deleteTravelInfo(travel_id: any) {
  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  var data = {
    user:this.utoken
  }
  // console.log("api called ",data)
  this.commanservice.deleteTravelInfo(travel_id , data).subscribe(
    res => {
      // console.log("res",res.)
      Notiflix.Loading.remove();
      Notiflix.Notify.success(res.body.message);     
      console.log("delete called")   
      this.getTravelInfoAll()
      if (!res.body.success) { Notiflix.Notify.failure(res.error); }
    },
    err => {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure(err.error?.message);
    }
  )
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


 async submitdata(){
  if (this.travelInfoForm.value._id != null) {
    console.log("called update") 

    if (this.travelInfoForm.pristine && !this.cover_image_travel ) {
      return;
    }
    const { value } = this.travelInfoForm;
    value.cover_image_travel = this.cover_image_travel


    console.log(value);
    var data = {
      user:this.userdata
    }
    var fd = new FormData();
    fd.append('name', value.travel_info.name);
    fd.append('description', value.travel_info.description);
    fd.append('Url', value.travel_info.Url);
    fd.append('filteroptions', value.filteroptions);
    fd.append('cover_image_travel', value.cover_image_travel);
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    this.commanservice.updateTravelInfo(this.travelInfoForm.value._id, fd , data).subscribe(
      res => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getTravelInfoAll()
        this.getTravelinfobyid(this.travelInfoForm.value._id)
        this.remove_image_all()
        if (!res.body.success) { Notiflix.Notify.failure(res.body.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
 
  }
  else{

    if (this.travelInfoForm.pristine && !this.cover_image_travel) {
      return;
    }

    const { value } = this.travelInfoForm;
    value.cover_image_travel = this.cover_image_travel

    // console.log(value);

    var fd = new FormData();
    fd.append('name', value.travel_info.name);
    fd.append('description', value.travel_info.description);
    fd.append('Url', value.travel_info.Url);
    fd.append('cover_image_travel', value.cover_image_travel);
    fd.append('filteroptions', value.filteroptions);


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
        // console.log("response",res)
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getTravelInfoAll()
        this.resetForm()
        if (!res.body.success) { Notiflix.Notify.failure(res.body.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
  }
 }


}
