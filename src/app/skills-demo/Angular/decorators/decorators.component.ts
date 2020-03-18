import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
  user: User;
  demos : Demo[];
  flag : string;
  parentClick:Subject<void> = new Subject<void>();
  constructor(private demoService : DemoService) { }

  ngOnInit() {
    this.demoService.getDemos().subscribe(items => this.demos = items.filter(item=>(item.group=='decorator' ||item.group==''))); 
  }
  onSelect(user : User) {
    this.user = user;
  }
  renderNewResult(option?:any){
    let snip = '';
    let output = '';
    let codeSnip = document.getElementById("code-snip");
    if(option.value != '') {
      codeSnip.className = "add-border";
      this.demos.forEach((result) => {
        if(option.value == result.name){
          this.flag = option.value;
          result.snip.forEach(element => snip += element + '</br>');
        } 
      });
    }
    else {
      codeSnip.classList.remove('add-border');
    }
    codeSnip.innerHTML = snip;
  } 
  clickMe(){
    this.parentClick.next();
  }
}
