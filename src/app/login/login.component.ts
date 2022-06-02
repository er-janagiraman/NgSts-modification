import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export interface CommonDto{
  responseData: any;
  responseDto: any;
  status: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    email: ['',Validators.required],
    password:['',Validators.required],

  })

  registerForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password:['',Validators.required],

  })

  submitted : boolean = false;
  sub : boolean = false;

  constructor(private fb: FormBuilder,private service :AuthService,private router:Router,private sppiner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.sppiner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.sppiner.hide();
    }, 500);
  }

  get f(){
    return this.profileForm.controls;
  }
  get g(){
    return this.registerForm.controls;
  }

  register() {
    this.sub = true;
    if(this.registerForm.invalid){
      return;
    }else{
      this.service.register(this.registerForm.value).subscribe((response:CommonDto)=>{
        console.log(response);
        if(response.status =="Success"){
          this.sub=false;
          this.registerForm.reset();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Account was created successfully',
            showConfirmButton: false,
            timer: 1500
          })
          }
        console.warn(this.registerForm.value);
      })
    }
  }

  login() {
    this.submitted = true;
    if(this.profileForm.invalid){
      return;
    }else{

    this.service.login(this.profileForm.value).subscribe((response:CommonDto)=>{
      console.log(response);
      if(response.status =="Success"){
        this.submitted=false;
        this.profileForm.reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login in Successfully',
          showConfirmButton: false,
          timer: 1500
        })

        this.router.navigateByUrl('default/register');
        }else{
          this.profileForm.reset();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not Found Account!',
            footer: 'Please check your email and password'
          })
        }
      console.warn(this.profileForm.value);
    })

    }
  }

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


}

