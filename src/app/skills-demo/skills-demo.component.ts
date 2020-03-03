import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-demo',
  templateUrl: './skills-demo.component.html',
  styleUrls: ['./skills-demo.component.css']
})
export class SkillsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(function() {
    //   $('#javaScript').on("click", function(){
    //     $('#javaScript .submenu').toggle();
    //   });
    //   $('#javaScript').hover(
    //     function() {
    //       if(outerWidth>599)
    //         $('#javaScript .submenu').show();
    //     }, function() {
    //         $('#javaScript .submenu').hide();
    //     }
    //   );      
    // });    
  }

}
