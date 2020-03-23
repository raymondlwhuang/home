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
  @Input() flag : string;
  @Input() parentClick : Subject<void> = new Subject<void>();
  @Input() demout : string='';
  @Input() helpPath : string='';
  dispUrl : string = environment.helpUrl+"/help/";
  outputText : any = "";
  show : boolean = true;
  constructor(private demoService : DemoService) { }

  ngOnInit() {
    this.message = (!this.flag || this.flag=='')? 'Please make your selection for show case' : 'Demo of: ' + this.flag.charAt(0).toUpperCase() + this.flag.slice(1);
    if(this.helpPath && this.helpPath != '') this.demoService.getHelpFile(this.helpPath).subscribe(
      data=> this.outputText = data, //console.log('HTTP response', data),
      err => console.log('HTTP Error', err.text()),
      () => console.log('HTTP request completed.')
    );
    this.parentClick.subscribe(()=>this.message="Button Clicked");
    // this.parentClick.pipe(shareReplay()).subscribe(()=>{
    //   alert(1);
    //   this.message="Button Clicked";
    // });    
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
