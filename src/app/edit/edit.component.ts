import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CommonDto } from './../login/login.component';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service :AuthService,private fb: FormBuilder,private router:Router,private sppiner:NgxSpinnerService) { }

  ngOnInit(): void {
     /** spinner starts on init */
     this.sppiner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.sppiner.hide();
     }, 500);

    // this.editForm.controls['name'].setValue(localStorage.getItem("name"));
    // this.editForm.controls['email'].setValue(localStorage.getItem("email"));
    // this.editForm.controls['mobile'].setValue(localStorage.getItem("mobile"));
    // this.editForm.controls['dob'].setValue(localStorage.getItem("dob"));
    // this.editForm.controls['gender'].setValue(localStorage.getItem("gender"));
    // this.editForm.controls['team'].setValue(localStorage.getItem("team"));
    // this.editForm.controls['password'].setValue(localStorage.getItem("password"));

    var name : any = localStorage.getItem("ename");
    this.service.edit1(name).subscribe((Response)=>{
      console.log(Response);
      console.log(Response.responseData.name);
      this.editForm.controls['name'].setValue(Response.responseData.name);
      this.editForm.controls['email'].setValue(Response.responseData.email);
      this.editForm.controls['dob'].setValue(Response.responseData.dob);
      this.editForm.controls['gender'].setValue(Response.responseData.gender);
      this.editForm.controls['team'].setValue(Response.responseData.team);
      this.editForm.controls['password'].setValue(Response.responseData.password);
      this.editForm.controls['mobile'].setValue(Response.responseData.mobile);
    })


  }

  editForm = this.fb.group({
    name: [''],
    email: [''],
    mobile: [''],
    dob: [''],
    gender: [''],
    team: [''],
    password:['']

  })


  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }




  onSubmit() {

    this.service.edit(this.editForm.value).subscribe((response:CommonDto)=>{
      console.log(response);
      if(response.status =="Success"){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('default/table');
        // this.dtable();

        }
      console.warn(this.editForm.value);
    })

   // console.log(this.profileForm.invalid);
  }

}
