import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-show',
  templateUrl: './pre-show.component.html',
  styleUrls: ['./pre-show.component.css']
})
export class PreShowComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router : Router) { 
    // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) { 
    this.router.navigate(['/login']);
    }

}
  ngOnInit() {
  }

}
