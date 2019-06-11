import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  @Input() compData: string;
  @Output() childEvent = new EventEmitter();
  constructor() { }
  onChange(value) {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }
}