import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  imagesList = [
    {url: environment.helpUrl+'/images/1.jpg',show: false},
    {url: environment.helpUrl+'/images/2.jpg',show: false},
    {url: environment.helpUrl+'/images/3.jpg',show: false},
    {url: environment.helpUrl+'/images/4.jpg',show: false},
    {url: environment.helpUrl+'/images/5.jpg',show: false},
    {url: environment.helpUrl+'/images/6.jpg',show: false},
    {url: environment.helpUrl+'/images/7.jpg',show: false},
    {url: environment.helpUrl+'/images/8.jpg',show: false},
    {url: environment.helpUrl+'/images/9.jpg',show: false},
    {url: environment.helpUrl+'/images/10.jpg',show: false},
    {url: environment.helpUrl+'/images/11.jpg',show: false},
    {url: environment.helpUrl+'/images/12.jpg',show: false},
    {url: environment.helpUrl+'/images/13.jpg',show: false},
    {url: environment.helpUrl+'/images/14.jpg',show: false},
    {url: environment.helpUrl+'/images/15.jpg',show: false},
    {url: environment.helpUrl+'/images/16.jpg',show: false},
    {url: environment.helpUrl+'/images/17.jpg',show: false},
    {url: environment.helpUrl+'/images/18.jpg',show: false},
    {url: environment.helpUrl+'/images/19.jpg',show: false},
    {url: environment.helpUrl+'/images/20.jpg',show: false},
    {url: environment.helpUrl+'/images/21.jpg',show: false},
    {url: environment.helpUrl+'/images/22.jpg',show: false},
    {url: environment.helpUrl+'/images/23.jpg',show: false},
    {url: environment.helpUrl+'/images/24.jpg',show: false},
    {url: environment.helpUrl+'/images/25.jpg',show: false},
    {url: environment.helpUrl+'/images/26.jpg',show: false},
    {url: environment.helpUrl+'/images/27.jpg',show: false},
    {url: environment.helpUrl+'/images/28.jpg',show: false},
    {url: environment.helpUrl+'/images/29.jpg',show: false},
    {url: environment.helpUrl+'/images/30.jpg',show: false},
    {url: environment.helpUrl+'/images/31.jpg',show: false},
    {url: environment.helpUrl+'/images/32.jpg',show: false},
    {url: environment.helpUrl+'/images/33.jpg',show: false},
    {url: environment.helpUrl+'/images/34.jpg',show: false},
    {url: environment.helpUrl+'/images/35.jpg',show: false},
    {url: environment.helpUrl+'/images/36.jpg',show: false},
    {url: environment.helpUrl+'/images/37.jpg',show: false},
    {url: environment.helpUrl+'/images/38.jpg',show: false},
    {url: environment.helpUrl+'/images/39.jpg',show: false},
    {url: environment.helpUrl+'/images/40.jpg',show: false},
    {url: environment.helpUrl+'/images/41.jpg',show: false},
    {url: environment.helpUrl+'/images/42.jpg',show: false},
    {url: environment.helpUrl+'/images/43.jpg',show: false},
    {url: environment.helpUrl+'/images/44.jpg',show: false},
    {url: environment.helpUrl+'/images/45.jpg',show: false},
    {url: environment.helpUrl+'/images/46.jpg',show: false},
    {url: environment.helpUrl+'/images/47.jpg',show: false},
    {url: environment.helpUrl+'/images/48.jpg',show: false}
  ];
  constructor() { }

  ngOnInit() {
  }

}
