import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { Subject } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserListComponent } from 'src/app/skills-demo/Angular/helpers/user-list/user-list.component';
import { ShowCaseComponent } from '../show-case/show-case.component';
import { InputHolder } from 'src/app/_models/input-holder';

@Component({
  selector: 'app-demo-selector',
  templateUrl: './demo-selector.component.html',
  styleUrls: ['./demo-selector.component.css']
})
export class DemoSelectorComponent implements OnInit {
  @Input() inputHolder : InputHolder = {group: ''};
  @ViewChild(UserListComponent,{static:false}) userListComponent : UserListComponent;
  @ViewChild(ShowCaseComponent,{static:false}) showCaseComponent : ShowCaseComponent;
  @ViewChildren(ShowCaseComponent) showCaseComponents : ShowCaseComponent[];
  demos : Demo[];
  // showCaseFlag : Subject<string> = new Subject<string>();
  // helpPath : Subject<string> = new Subject<string>();
  parentClick: Subject<void> = new Subject<void>();
  flag: string;
  output: string;
  message: string;
  buttonMsg : string = "Start Clock";
  indicator : number = 0;
  stop : any;
  user : User;
  viewChildrenButton: any =['Child 1','Child 2','Child 3'];
  constructor(private demoService : DemoService) { }

  ngOnInit() {
    this.demoService.getDemos().subscribe(items => this.demos = items.filter(item=>(item.group==this.inputHolder.group ||item.group==''))); 
  }
  startClock(indicator,element){
    this.indicator = indicator;
    this.parentClick.next();
    if(indicator) {
      this.stop = setInterval(()=>element.today = new Date(),1000);
      this.buttonMsg = "Stop Clock"
    }
    else{
      clearInterval(this.stop);
      this.buttonMsg = "Start Clock";
    } 
  }
  onSelect(user : User) {
    this.user = user;
  }

  renderNewResult(option?:any){
    let snip = '';
    let codeSnip = document.getElementById("code-snip");
    let thisHolder : InputHolder;
    this.flag = option.value;
    //this.showCaseFlag.next(option.value);
    this.inputHolder = {...thisHolder,showCaseFlag:option.value};
    if(option.value != '') {
      codeSnip.className = "add-border";
      this.demos.forEach((result) => {
        if(option.value == result.name){
          result.snip.forEach(element => snip += element + '</br>');
          this.output = '';
          result.output.forEach(element => this.output += element + '</br>');
          //this.helpPath.next(result.helpPath);
          thisHolder = this.inputHolder;
          this.inputHolder = {...thisHolder,helpPath:result.helpPath};
        } 
      });
    }
    else {
      codeSnip.classList.remove('add-border');
      this.message = 'Please make your selection for show case';
    }
    this.buttonMsg = "Start Clock";
    this.indicator = 0;
    clearInterval(this.stop);
    codeSnip.innerHTML = snip;
  } 
  changeMessage(i : number){
    this.showCaseComponents.forEach((showCaseComponent,index) => {
      if(index == i) {
        showCaseComponent.message = "Child " + (index + 1) +" button had been Clicked";
        showCaseComponent.changeDetectionRf.detectChanges();
      };
    });
  }

}
