import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImagesList } from 'src/app/_models/images-list';
import { InputHolder } from 'src/app/_models/input-holder';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {
  inputHolder : InputHolder = {showCaseFlag:'',demout:'',helpPath:'',imagesList:''};
  pointer = 0;
  imagesList : Array<ImagesList>= environment.imagesList;
  intervalId: any;
  constructor(private changeDetectRf : ChangeDetectorRef) { }

  ngOnInit() {
    let _this = this;
    this.intervalId = setInterval(()=>{
      let thisHolder : InputHolder = _this.inputHolder;
      let count = _this.countUp();
      let url = this.imagesList[count].url;
      _this.inputHolder = {...thisHolder,imagesList : url,showCaseFlag:''};
      console.log(url);
      this.changeDetectRf.detectChanges();
    },1000);
  }
  countUp (){
    this.pointer++;
    if(this.pointer > 47) this.pointer=0;
    return this.pointer;
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
