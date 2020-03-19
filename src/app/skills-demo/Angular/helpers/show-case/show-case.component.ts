import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  today : Date = new Date ();
  message : string;
  @Input() flag : string;
  constructor() { }

  ngOnInit() {
  }

}
