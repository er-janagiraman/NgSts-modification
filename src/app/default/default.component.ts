import { FormBuilder } from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private router:Router,private service :AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {

  }


logout(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Logout it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigateByUrl('login');
      Swal.fire(
        'Logout Sucessfully!',
        'Thank You 🤗️',
        'success'
      )
    }
  })
}

}
