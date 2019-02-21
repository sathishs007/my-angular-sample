import { Component, OnInit } from '@angular/core';
import { Sample } from './sample';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
usermodel=new Sample('','','','');
  constructor() { }
  ngOnInit() {
    
    this.usermodel =JSON.parse(localStorage.getItem('userModel'));
  }


}
