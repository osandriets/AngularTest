import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }


  navs = [
    {
      id: 1,
      name: 'Feed',
      img: 'assets/images/nav/feed.svg'
    },
    {
      id: 2,
      name: 'Ask a Colleague',
      img: 'assets/images/nav/ask.svg'
    },
    {
      id: 3,
      name: 'Companies',
      img: 'assets/images/nav/companies.svg'
    },
    {
      id: 4,
      name: 'Service Directory',
      img: 'assets/images/nav/service.svg'
    }
];



ngOnInit() {
  }

}
