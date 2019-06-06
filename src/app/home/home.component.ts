import { Component, OnInit, Input,  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input() public company: any;
  @Input() public employee: any;
  //company : any;
 
  constructor() { }

  ngOnInit() {
 
  }
}
