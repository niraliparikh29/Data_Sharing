import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
  styleUrls: ['./data-passing.component.css']
})
export class DataPassingComponent implements OnInit {
  message:string;
  constructor(private data:ApisService) { }

  ngOnInit() {
    
  }
 
}
