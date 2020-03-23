import { Component, OnInit,Output,EventEmitter, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {
  users : User[];
  selectedOption: User = {email: '',firstName: '',lastName: '',yearsActive: null};
  @Output() onSelect: EventEmitter<User>  = new EventEmitter;
  @Input() parentClick: Subject <void>;
  //@ViewChild('selectRef', {static: false}) selectEleRef : ElementRef;
  today: Date = new Date();
  message : string;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
    this.parentClick.pipe(shareReplay()).subscribe(()=>{
      this.message = !this.message ? 'Had used ViewChild to update child message here' : '';
      let selected =  document.querySelectorAll("div p:first-child");
       selected.forEach((ele:HTMLElement)=>ele.style.color="red");
      });
  }
  ngAfterViewInit(){
    //this.selectEleRef.nativeElement.focus();
  }
  renderNewResult(){
    this.onSelect.emit(this.selectedOption);
  }

}