import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sample } from './sample';
@Component({
	selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  usermodel=new Sample('Thuraiyur','Good experience','sathish','5');
  constructor(
    private router: Router
  ){}
  submitted =false;
title = 'test-sample';
//console.log("test::::::::::");
  
//console.log("test::::::::::");
//alert("test");
  ngOnInit() {
  }
  onSubmit(x){
    this.submitted =true;
    console.log("form :::::::: "+x.value);
    console.log(" sample class ::::::: "+this.usermodel);
    if(x.invalid){
      return
    }
    this.usermodel=x.value;
    console.log(this.usermodel);
    localStorage.setItem('userModel', JSON.stringify(x.value));
    this.router.navigate(['/sample']);
  }
}
