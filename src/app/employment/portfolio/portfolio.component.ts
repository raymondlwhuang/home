import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios = [
    { website:'http://driving.ca', url: '../../assets/images/driving.png',show: false },
    { website:'http://www.livingdeal.com', url: '../../assets/images/livingdeal.png',show: false },
    { website:'https://fansunited.org/', url: '../../assets/images/fansunited.png',show: false },
    { website:'http://o.canada.com', url: '../../assets/images/ocanada.png',show: false },
    { website:'http://www.windsorstar.com', url: '../../assets/images/windsorstar.png',show: false },
    { website:'http://www.edmontonjournal.com', url: '../../assets/images/edmontonjournal.png',show: false },
    { website:'http://www.calgaryherald.com', url: '../../assets/images/calgaryherald.png',show: false },
    { website:'http://ernie.com/', url: '../../assets/images/ernie.png',show: false }
  ]
  constructor() { }

  ngOnInit() {
  }

}
