import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';

export interface CommonDto{
  responseData: any;
  responseDto: any;
  status: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // name = new FormControl('');

  // profileForm = new FormGroup({
  //   name  : new FormControl(''),
  //   email : new FormControl(''),
  //   phone : new FormControl(''),
  //   dob   : new FormControl(''),
  //   gender: new FormControl(''),
  //   team  : new FormControl(''),
  //   Skill1: new FormControl(''),
  //   Skill2: new FormControl(''),
  //   Skill3: new FormControl(''),
  //   Skill4: new FormControl(''),
  //   Skill5: new FormControl(''),

  // });

  profileForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    mobile: [''],
    dob: ['',Validators.required],
    gender: [''],
    team: [''],
    password:['',Validators.required]

  })

  submitted : boolean = false;

  constructor( private fb: FormBuilder,private service :AuthService,private sppiner:NgxSpinnerService) { }

  ngOnInit(): void {
     /** spinner starts on init */
     this.sppiner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.sppiner.hide();
     }, 500);
  }



  // submit(){
  //    console.log(this.name.value);

  // }

  updateName() {
    // this.name.setValue('Nancy');
    this.profileForm.patchValue({
      name:"Janagi Raman",
      email:"janagiraman@email.com",
      mobile:"1234567890",
      gender:"Male",
      team:"LIC",
      password:"admin"
    });
  }

  get f(){
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.warn(this.profileForm.value);
    // console.log(this.profileForm.controls);
    // console.log(this.f['name'].errors);
    if(this.profileForm.invalid){
      return;
    }else{
      this.service.save(this.profileForm.value).subscribe((response:CommonDto)=>{
        console.log(response);
        if(response.status =="Success"){
          this.submitted=false;
          this.profileForm.reset();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been submitted',
            showConfirmButton: false,
            timer: 1500
          })
          }
        console.warn(this.profileForm.value);
      })
    }
    // console.log(this.profileForm.invalid);
  }

  fetch(){
    console.log(this.profileForm.value);
    this.service.fetch().subscribe((response)=>{
      console.log(response);
    })
  }

  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
