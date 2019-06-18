import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  message: string;
  constructor(private data: ApisService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  newMessage() {
    this.data.changeMessage("Hello from Subject")
  }
}
