import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
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
export class AdminHomeComponent implements OnInit {
  homeInfoForm: FormGroup;
  uinfo: any;
  utoken: any;
  userdata: any;
  homeInfoDataAll: any;
  home_images: any[] = [];
  home_images_url: any[] = [];
  BASE_URI: any;
  show_form: boolean = true;
  homeInfoById: any;
  constructor(public formbuilder: FormBuilder, public commanservice: CommonService) {
    this.BASE_URI = environment.apiUrl;
  }
  ngOnInit(): void {
    this.homeInfoForm = this.formbuilder.group({
      _id: [null, Validators.required],
      title : ["", Validators.required],
      home_images: this.formbuilder.group({
        name: ["", Validators.required]
      }),
    });
    this.uinfo = localStorage.getItem('u_info');
    this.utoken = localStorage.getItem('auth_token');
    this.userdata = JSON.parse(this.uinfo)
    this.getHomeInfoAll()
  }
  getHomeInfoAll(){
    this.commanservice.gethomeInfoAll().subscribe(
      res => {
        console.log("=-=-=-=-res", res);
        this.homeInfoDataAll = res.body.data
        console.log("all home data",this.homeInfoDataAll)
        if (!res.success) { Notiflix.Notify.failure(res.error);  }
      },
      err => {
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }
  async submitdata(){
    console.log("=-=-=-=-this.homeInfoForm.value", this.homeInfoForm.value);
    if (this.homeInfoForm.value._id != null) {
      if (this.homeInfoForm.pristine && !this.home_images ) {
        return;
      }
      const { value } = this.homeInfoForm;
      value.home_images = this.home_images
      console.log(value);
      var data = {
        user:this.userdata
      }
      var fd = new FormData();
      fd.append('title', value.title);
      fd.append('home_id', value._id);
      for (let i=0;i<value.home_images.length;i++) {
        fd.append('home_images', value.home_images[i]);
      }
      Notiflix.Loading.standard({
        cssAnimationDuration: 2000,
        backgroundColor: '0, 0, 0, 0.0',
      },
      )
      this.commanservice.updateHomeInfo(fd).subscribe(
        res => {
          Notiflix.Loading.remove();
          Notiflix.Notify.success(res.body.message);
          this.getHomeInfoAll()
          this.getHomeinfobyid(this.homeInfoForm.value._id)
          // this.remove_image_all()
          this.resetForm()
          if (!res.body.success) { Notiflix.Notify.failure(res.body.error); }
        },
        err => {
          Notiflix.Loading.remove();
          Notiflix.Notify.failure(err.error?.message);
        }
      )
    }
    else{
      if (this.homeInfoForm.pristine) {
        return;
      }
      const { value } = this.homeInfoForm;
      // value.home_images = this.home_images
      value.home_images = this.home_images
      // console.log(value);
      var fd = new FormData();
      fd.append('title', value.title);
      // fd.append('name', value.home_images);
      for (let i=0;i<value.home_images.length;i++) {
        fd.append('home_images', value.home_images[i]);
      }
      var data = {
        user:this.userdata
      }
      Notiflix.Loading.standard({
        cssAnimationDuration: 2000,
        backgroundColor: '0, 0, 0, 0.0',
      },
      )
      this.commanservice.inserthomeInfo(fd , data).subscribe(
        res => {
          // console.log("response",res)
          Notiflix.Loading.remove();
          Notiflix.Notify.success(res.body.message);
          this.getHomeInfoAll()
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
   uppdatethomeinfo(home_id:any){
    this.show_form = true;
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    this.getHomeinfobyid(home_id)
  }
   resetForm(){
    this.homeInfoForm.reset()
    this.homeInfoById = []
    // this.removeCoverImage()
    // this.remove_image_all()
    this.show_form = false;
    }
   getHomeinfobyid(home_id: any){
    this.commanservice.getHomeinfobyid(home_id).subscribe(
      res => {
        console.log("=-=-=-=-res", res);
        Notiflix.Loading.remove();
        this.homeInfoById = res.data
        console.log("============",this.homeInfoById)
        this.homeInfoForm.patchValue(res.data)
        if (!res.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {
        Notiflix.Notify.failure(err.error?.message);
      }
    );
   }
   onHomeImagesUpload(event: any) {
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    console.log("=-=-=-onHomeImagesUpload", event);
    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.home_images.push(file)
        reader.onload = (event) => {
          this.home_images_url.push((<FileReader>event.target).result);
        }
      }
    }
    Notiflix.Loading.remove();
  }
  async deleteHomeInfo(home_id: any) {
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    })
    // console.log("api called ",data)
    this.commanservice.deleteHomeInfo(home_id).subscribe(
      res => {
        // console.log("res",res.)
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        console.log("delete called")
        this.getHomeInfoAll()
        if (!res.body.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
  }
  deleteHomeImage(home_id: any, image_id: any){
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    var data = {
      user:this.utoken
    }
    this.commanservice.deleteHomeImage(home_id, image_id ,data).subscribe(
      res => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getHomeinfobyid(home_id)
        if (!res.body.success) { Notiflix.Notify.failure(res.error); }
      },
      err => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(err.error?.message);
      }
    )
  }
  remove_image(index: any){
    this.home_images_url.splice(index, 1)
    this.home_images.splice(index, 1)
  }
}