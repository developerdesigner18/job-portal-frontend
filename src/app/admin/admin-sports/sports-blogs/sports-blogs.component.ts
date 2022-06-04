import { trigger, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sports-blogs',
  templateUrl: './sports-blogs.component.html',
  styleUrls: ['./sports-blogs.component.scss'],
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
export class SportsBlogsComponent implements OnInit {
  BASE_URI: string;
  bloginfoDataAll: any = [];
  blogInfoById: any;
  blogInfoForm: FormGroup;
  show_form: boolean = true;
  url: any;
  format: any;
  cover_image_url: any;
  blog_images_url: any = [];
  cover_image_blog: any;
  blog_images: any = [];
  userdata: any;
  uinfo: any;
  utoken: any;
  isSubmitted = false;

  constructor(public formbuilder: FormBuilder, public commanservice: CommonService) {
    this.BASE_URI = environment.apiUrl;
    this.show_form = false
   }

   ngOnInit(): void {
    this.blogInfoForm = this.formbuilder.group({
      _id: [null, Validators.required],
      blog_info: this.formbuilder.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        fulltext: ["", Validators.required],     
      }),
    });
    this.uinfo = localStorage.getItem('u_info');
    this.utoken = localStorage.getItem('auth_token');
    this.userdata = JSON.parse(this.uinfo)
    this.getBlogInfoAll()
  }



  getControlValidation(key: string): boolean {
    const { invalid, touched, dirty } = this.blogInfoForm.get(key) as FormGroup;
    // console.log(key);
    return invalid && (touched || dirty);
  }

  getBlogInfoAll() {
    this.commanservice.getBlogInfoAll().subscribe(
      res => {
        this.bloginfoDataAll = res.data
        // console.log("all blog data",this.bloginfoDataAll)
        this.blogInfoForm.patchValue(res.data)        
        if (!res.success) { Notiflix.Notify.failure(res.error);  }
        
      },
      err => {        
        Notiflix.Notify.failure(err.error?.message);
      }
    );
  }

  getBloginfobyid(blog_id: any) {
    this.commanservice.getBloginfobyid(blog_id).subscribe(
  res => {
    Notiflix.Loading.remove();
    this.blogInfoById = res.data
    console.log("============",this.blogInfoById)
    this.blogInfoForm.patchValue(res.data)
    if (!res.success) { Notiflix.Notify.failure(res.error); }
  },
  err => {        
    Notiflix.Notify.failure(err.error?.message);
  }
);
}

insertBlogInfo(){
  this.blogInfoForm.reset()
  this.blogInfoById = []
  this.removeCoverImage()
  this.remove_image_all()
  this.show_form = true;

}

resetForm() {
  this.blogInfoForm.reset()
  this.blogInfoById = []
  this.removeCoverImage()
  this.remove_image_all()
  this.show_form = false;
}


 uppdatebloginfo(blog_id:any){
  this.show_form = true;
  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  this.getBloginfobyid(blog_id)
}

deleteBlogImage(blog_id: any, image_id: any) {
  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  var data = {
    user:this.utoken
  }
  this.commanservice.deleteBlogImage(blog_id, image_id ,data).subscribe(
    res => {
      Notiflix.Loading.remove();
      Notiflix.Notify.success(res.body.message);        
      this.getBloginfobyid(blog_id)
      if (!res.body.success) { Notiflix.Notify.failure(res.error); }
    },
    err => {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure(err.error?.message);
    }
  )
}

async deleteBlogInfo(blog_id: any) {
  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  var data = {
    user:this.utoken
  }
  // console.log("api called ",data)
  this.commanservice.deleteBlogInfo(blog_id , data).subscribe(
    res => {
      // console.log("res",res.)
      Notiflix.Loading.remove();
      Notiflix.Notify.success(res.body.message);     
      console.log("delete called")   
      this.getBlogInfoAll()
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
      this.cover_image_blog = file
      reader.onload = (event) => {
        this.cover_image_url = (<FileReader>event.target).result;
      }
    }
  }
  Notiflix.Loading.remove();
}

onBlogImagesUpload(event: any) {
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
      this.blog_images.push(file)
      reader.onload = (event) => {
        this.blog_images_url.push((<FileReader>event.target).result);
      }
    }
  }    
  Notiflix.Loading.remove();
}



  removeCoverImage() {
    this.cover_image_url = undefined
    this.cover_image_blog = undefined
  }

  remove_image(index: any) {
    this.blog_images_url.splice(index, 1)
    this.blog_images.splice(index, 1)
  }
  
  remove_image_all() {
    this.blog_images_url = []
    this.blog_images = []
  }


 async submitdata(){
  if (this.blogInfoForm.value._id != null) {
    console.log("called update") 

    if (this.blogInfoForm.pristine && !this.cover_image_blog && !this.blog_images ) {
      return;
    }
    const { value } = this.blogInfoForm;
    value.cover_image_blog = this.cover_image_blog
    value.blog_images = this.blog_images


    console.log(value);
    var data = {
      user:this.userdata
    }
    var fd = new FormData();
    fd.append('name', value.blog_info.name);
    fd.append('description', value.blog_info.description);
    fd.append('fulltext', value.blog_info.fulltext);
    fd.append('cover_image_blog', value.cover_image_blog);
    // for (let i=0;i<value.blog_images.length;i++) {
    //   fd.append('blog_images', value.blog_images[i]);
    // }

    console.log(fd);
    
    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )
    this.commanservice.updateblogInfo(this.blogInfoForm.value._id, fd , data).subscribe(
      res => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getBlogInfoAll()
        this.getBloginfobyid(this.blogInfoForm.value._id)
        this.remove_image_all()
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

    if (this.blogInfoForm.pristine && !this.cover_image_blog && !this.blog_images) {
      return;
    }

    const { value } = this.blogInfoForm;
    value.cover_image_blog = this.cover_image_blog
    value.blog_images = this.blog_images

    // console.log(value);

    var fd = new FormData();
    fd.append('name', value.blog_info.name);
    fd.append('description', value.blog_info.description);
    fd.append('fulltext', value.blog_info.fulltext);
    fd.append('cover_image_blog', value.cover_image_blog);
    // for (let i=0;i<value.blog_images.length;i++) {
    //   fd.append('blog_images', value.blog_images[i]);
    // }

    var data = {
      user:this.userdata
    }

    Notiflix.Loading.standard({
      cssAnimationDuration: 2000,
      backgroundColor: '0, 0, 0, 0.0',
    },
    )

    this.commanservice.insertblogInfo(fd , data).subscribe(
      res => {
        // console.log("response",res)
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.body.message);
        this.getBlogInfoAll()
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
