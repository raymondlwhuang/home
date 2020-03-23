import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  slideIndex = 0;
  slides : any;
  imgUrl1 = environment.helpUrl+'/images/me1.jpg';
  imgUrl2 = environment.helpUrl+'/images/me2.jpg';
  constructor() { }

  ngOnInit() {
    this.slides = document.getElementsByClassName("mySlides")  as HTMLCollectionOf<HTMLElement>;
    this.showSlides();
  }
  
  showSlides = () =>{
    if(this.slides.length>0){
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";  
      }
      this.slides[this.slideIndex].style.display = "block"; 
      this.slideIndex++;
      if (this.slideIndex >= this.slides.length) {this.slideIndex = 0}  
      setTimeout(this.showSlides,5000);
  
    }
  }
}
