import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sample } from './sample';
@Component({
	selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  usermodel=new Sample('','','','');
  constructor(
    private router: Router
  ){}
title = 'test-sample';
//console.log("test::::::::::");
  
//console.log("test::::::::::");
//alert("test");
  ngOnInit() {
  }
  onSubmit(x){
    console.log(x.value);
    this.usermodel=x.value;
    console.log(this.usermodel);
    this.router.navigate(['/sample']);
  }
}
