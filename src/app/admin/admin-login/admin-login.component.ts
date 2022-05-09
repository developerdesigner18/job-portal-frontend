import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor( public formbuilder: FormBuilder,
    private router: Router,
    private commanserive:CommonService) { }


 async onSubmitLogin(){
  if (this.loginForm.invalid) {
    return;
  }


  const { value } = this.loginForm;

  Notiflix.Loading.standard({
    cssAnimationDuration: 2000,
    backgroundColor: '0, 0, 0, 0.0',
  },
  )
  this.commanserive.adminLogin(value).subscribe(
    res => {
      if (res.success) {
        Notiflix.Loading.remove();
        Notiflix.Notify.success(res.message);
        
        localStorage.setItem('u_info', JSON.stringify(res.data));
        localStorage.setItem('auth_token', res.token);
        
        this.router.navigateByUrl('admin/admin-sports')
      } else {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure(res.error);

        
      }
    },
    err => {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure(err.error);
      // this.broadcastService.handleError(err.error.message);
    }
  );
  }

  ngOnInit(): void {
    console.log('LoginComponent ngOnInit()');
    this.loginForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }


}
