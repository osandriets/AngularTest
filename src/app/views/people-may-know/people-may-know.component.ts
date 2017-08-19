import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-may-know',
  templateUrl: './people-may-know.component.html',
  styleUrls: ['./people-may-know.component.scss']
})
export class PeopleMayKnowComponent implements OnInit {

  constructor() { }

  peoples = [
    { id: 1,
      name: "Dennis Adams",
      img: "assets/images/foto/foto1.jpg",
      profession: "Dentist (Practice Owner)",
      address: "London, England"
    },
    { id: 2,
      name: "Mary Carpenter",
      img: "assets/images/foto/foto2.jpg",
      profession: "Dentist (Practice Owner)",
      address: "Belgrade, Serbia"
    },
    { id: 3,
      name: "Danielle Salazar",
      img: "assets/images/foto/foto3.jpg",
      profession: "Dentist (Practice Owner)",
      address: "Paris, France"
    }
  ];

  ngOnInit() {
  }

}
