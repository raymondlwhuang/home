import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  today : Date = new Date ();
  message : string = 'Please make your selection for show case';
  @Input() flag : string;
  @Input() parentClick : Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit() {
    if(this.flag) this.message = 'Demo of: ' + this.flag.charAt(0).toUpperCase() + this.flag.slice(1);
    // this.parentClick.pipe(shareReplay()).subscribe(()=>{
    //   this.message="Button Clicked";
    // });    
  }
}
