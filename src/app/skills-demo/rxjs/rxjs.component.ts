import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Favorite } from 'src/app/_models/favorite';
import { FavoriteService } from 'src/app/_services/favorite.service';

export class Person {
  id?: number;
  name?: string;
  age?: number;
  sex?: string;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  favorites : Favorite[];
  title = 'functions';
  promiseCount = 0;
  functions: any[] = [
    {name: 'Make your selection', value:''},
    {name: 'of', value:'of'},
    {name: 'from', value:'from'},
    {name: 'apply', value:'apply'},
    {name: 'bind', value:'bind'},
    {name: 'polyfill for bind', value:'polyfill for bind'},
    {name: 'promise', value:'promise'}
  ];
  constructor(private _favorite : FavoriteService) { }

  ngOnInit() {
    const person : Person = {
      name: 'david'
    }

    const personObs : Observable<Person> = of(person);
    personObs.subscribe(data=>console.log(data.name));
    this._favorite.getFavorites().subscribe(data => this.favorites = data); 
  }
  renderNewResult(option?:any){
    let snip = '';
    let output = '';
    let codeSnip = document.getElementById("code-snip");
    let outputBox = document.getElementById("output");
    if(option.value != '') {
      codeSnip.className = "add-border";
      this.favorites.forEach((result) => {
        if(option.value == result.name){
          result.snip.forEach(element => {
            snip += element + '</br>';
          });
          if(result.output){
            result.output.forEach(element => {
              output += element + '</br>';
            });
    
          }
        } 
      });
    }
    else {
      codeSnip.classList.remove('add-border');
      outputBox.classList.remove('add-border');
    }
    codeSnip.innerHTML = snip;
    outputBox.innerHTML = output;
  } 
}
