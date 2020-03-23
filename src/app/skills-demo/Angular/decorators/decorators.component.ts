import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { Subject } from 'rxjs';
import { UserListComponent } from '../helpers/user-list/user-list.component';
import { ShowCaseComponent } from '../helpers/show-case/show-case.component';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
  user: User;
  demos : Demo[];
  flag : string;
  message : string = 'Please make your selection for show case';
  output = '';
  helpPath = '';
  parentClick:Subject<void> = new Subject<void>();
  @ViewChild(UserListComponent,{static:false}) userListComponent : UserListComponent;
  @ViewChildren(ShowCaseComponent) showCaseComponents : ShowCaseComponent[];
  indicator: number = 0;
  stop : any;
  buttonMsg :string = "Start Clock";
  viewChildrenButton: any =['Child 1','Child 2','Child 3'];
  constructor(private demoService : DemoService) { }

  ngOnInit() {
    this.demoService.getDemos().subscribe(items => this.demos = items.filter(item=>(item.group=='decorator' ||item.group==''))); 
  }
  onSelect(user : User) {
    this.user = user;
  }
  renderNewResult(option?:any){
    let snip = '';
    let codeSnip = document.getElementById("code-snip");
    this.flag = option.value;
    if(option.value != '') {
      codeSnip.className = "add-border";
      this.demos.forEach((result) => {
        if(option.value == result.name){
          result.snip.forEach(element => snip += element + '</br>');
          this.output = '';
          result.output.forEach(element => this.output += element + '</br>');
          this.helpPath = result.helpPath;
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
  changeMessage(indicator,i : number){
    this.showCaseComponents.forEach((showCaseComponent,index) => {
      if(index == i) {
        //this.startClock(indicator,showCaseComponent);
        showCaseComponent.message = "Child " + (index + 1) +" button had been Clicked";
      };
  });
  }
}
