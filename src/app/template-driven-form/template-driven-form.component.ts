import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  submitted : boolean = false;
  
  name:string ="";
  btn:string="btn btn-warning";  // class and id , src can set Dynamic name using [class],[id],[src]
  // mobile:string="";
  // email:string="";

  constructor() { }

  ngOnInit(): void {
  }

  click(name:string){
    console.warn(name);
  }

  submit(formName : any){
    this.submitted = true;
    if(formName.invalid){
      return;
    }else{
    console.log(formName.value);
    }
  }

}
