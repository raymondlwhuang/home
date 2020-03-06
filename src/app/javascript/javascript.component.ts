import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  url = window.location.origin+'/JavaScript/index.html';
  show = false;
  constructor() {
  }

  ngOnInit() {
    this.show = window.location.origin.indexOf('https') > 0 ? false : true;
  }

}
