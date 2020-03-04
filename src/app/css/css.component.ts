import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router : Router) { 
        // redirect to home if already logged in
        if (!this.authenticationService.currentUserValue) { 
          this.router.navigate(['/login']);
      }

  }

  ngOnInit() {
    // $(function() {
    //   $('textarea').on('change',()=>{
    //     console.log($('textarea').val());
    //     $('.show-case').html(<string>$('textarea').val());
    //   })
    //   $(".space").on('click',()=>{
    //     $('div,section,p').removeAttr("style");
    //     $('div p').css('color','red');
    //   });
    //   $(".greater_Sign").on('click',()=>{
    //     $('div,section,p').removeAttr("style");
    //     $('div > p').css('color','red');
    //   });
    //   $(".plus_Sign").on('click',()=>{
    //     $('div,section,p').removeAttr("style");
    //     $('div + p').css('color','red');
    //   });
    //   $(".aprox_Sign").on('click',()=>{
    //     $('div,section,p').removeAttr("style");
    //     $('div ~ p').css('color','red');
    //   });
    // });
  }
}
