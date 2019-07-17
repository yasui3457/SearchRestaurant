import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-pepper',
  templateUrl: './hot-pepper.component.html',
  styleUrls: ['./hot-pepper.component.css']
})
export class HotPepperComponent implements OnInit {

  keyword: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
