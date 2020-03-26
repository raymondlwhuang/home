import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DemoService } from 'src/app/_services/demo.service';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  today : Date = new Date ();
  message : string;
  @Input() showCaseFlag : Subject<string>;
  @Input() parentClick : Subject<void>;
  @Input() demout : string='';
  @Input() helpPath : Subject<string>;
  outputText : any = "";
  show : boolean = true;
  flag : string;
  constructor(private demoService : DemoService) { }

  ngOnInit() {
    this.showCaseFlag.subscribe(msg=>{
      this.flag = msg;
      if(msg)
        this.message = 'Demo of: ' + msg.charAt(0).toUpperCase() + msg.slice(1);
      else {
        this.show = true;
        this.outputText='';
        this.message = 'Please make your selection for show case';
      }
    });
    this.helpPath.pipe(shareReplay()).subscribe(data=>{
      if(data) this.demoService.getHelpFile(data).subscribe(outText=>this.outputText=outText);
    });
    this.parentClick.pipe(shareReplay()).subscribe(()=>this.message="Button Clicked");
  }
  showCode(){
    if(this.show) {
      this.show = false;
      document.getElementById('output').style.display = 'block';
      document.getElementById('show-code').innerText = 'Hide Code';
    }
    else {
      this.show = true;
      document.getElementById('output').removeAttribute('style');
      document.getElementById('show-code').innerText = 'Show Code';
    }
  }
}
