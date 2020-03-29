import { Component, OnInit, Input,OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DemoService } from 'src/app/_services/demo.service';
import { InputHolder } from 'src/app/_models/input-holder';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowCaseComponent implements OnInit,OnChanges {
  @Input() inputHolder : InputHolder;
  //@Input() helpPath : Subject<string>=new Subject<string>();
  today : Date = new Date ();
  message : string;
  outputText : any = "";
  show : boolean = true;
  flag : string;
  constructor(
              private demoService : DemoService,
              public changeDetectionRf : ChangeDetectorRef
              ) { }

  ngOnInit() {
    // this.helpPath.subscribe(path=>{
    //   if(path) {
    //     this.demoService.getHelpFile(path).subscribe(outText=>{
    //       this.outputText=outText;
    //       this.changeDetectionRf.markForCheck();
    //     });
  
    //   }
    // });

  }
  ngOnChanges(){
    // this.helpPath.subscribe(path=>{
    //   if(path) {
    //     this.demoService.getHelpFile(path).subscribe(outText=>{
    //       this.outputText=outText;
    //       this.changeDetectionRf.markForCheck();
    //     });
  
    //   }
    // });
    if(this.inputHolder.helpPath && this.inputHolder.helpPath!='') {
      this.demoService.getHelpFile(this.inputHolder.helpPath).subscribe(outText=>{
        this.outputText=outText;
        this.changeDetectionRf.markForCheck();
      });

    }   
      this.flag = this.inputHolder.showCaseFlag;
      if(this.flag)
        this.message = 'Demo of: ' + this.flag.charAt(0).toUpperCase() + this.flag.slice(1);
      else {
        this.show = true;
        this.outputText='';
        this.message = 'Please make your selection for show case';
      }

    //this.flag = this.inputHolder.showCaseFlag;
    //if(this.inputHolder.helpPath) this.demoService.getHelpFile(this.inputHolder.helpPath).subscribe(outText=>this.outputText=outText);

    if(this.inputHolder.parentClick) this.message="Button Clicked";
  }
  showCode(){
//    this.demoService.getHelpFile(this.inputHolder.helpPath).subscribe(outText=>this.outputText=outText);

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
