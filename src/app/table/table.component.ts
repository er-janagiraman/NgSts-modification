import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
declare var $:any;

export interface CommonDto{
  responseData: any;
  responseDto: any;
  status: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataList:any;

  constructor(private service :AuthService,private fb: FormBuilder,private router:Router,private sppiner:NgxSpinnerService) { }

  ngOnInit(): void {

    /** spinner starts on init */
    this.sppiner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.sppiner.hide();
    }, 500);

    this.dtable();

  }

  dtable(){
    this.service.fetch().subscribe((response:CommonDto)=>{
      this.dataList=response.responseDto;
      $(document).ready(function () {
        $('#table').DataTable();
    });
      console.log(this.dataList);
    })
  }

  editForm = this.fb.group({
    name: [''],
    email: [''],
    mobile: [''],
    dob: [''],
    gender: [''],
    team: [''],
    password:[''],
    eid:['']

  })

  edit(row : any){
    this.editForm.controls['name'].setValue(row.name),
    this.editForm.controls['email'].setValue(row.email),
    this.editForm.controls['mobile'].setValue(row.mobile),
    this.editForm.controls['dob'].setValue(row.dob),
    this.editForm.controls['gender'].setValue(row.gender),
    this.editForm.controls['team'].setValue(row.team),
    this.editForm.controls['team'].setValue(row.password),
    this.editForm.controls['eid'].setValue(row.eid)
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
          this.dtable();

        }
        console.warn(this.editForm.value);
      })

    // console.log(this.profileForm.invalid);
  }
  delete(name : string){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(name).subscribe((response:CommonDto)=>{
          console.log(response);
          if(response.status =="Success"){
            this.dtable();
            }
          console.warn(this.editForm.value);
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  edit2(row:any){

    localStorage.setItem("ename",row.name);
    // localStorage.setItem("email",row.email);
    // localStorage.setItem("dob",row.dob);
    // localStorage.setItem("mobile",row.mobile);
    // localStorage.setItem("gender",row.gender);
    // localStorage.setItem("team",row.team);
    // localStorage.setItem("password",row.password);


    this.router.navigateByUrl("default/edit");

  }

}
