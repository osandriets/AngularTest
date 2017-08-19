import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-companies',
  templateUrl: './featured-companies.component.html',
  styleUrls: ['./featured-companies.component.scss']
})
export class FeaturedCompaniesComponent implements OnInit {

  constructor() { }

  companies = [
    { id: 1,
      name: "Company Name",
      img: "assets/images/company/company_1.jpg",
      specialization: "Manufacturer",
      address: "Belgrade, Serbia"
    },
    { id: 2,
      name: "Company Name",
      img: "assets/images/company/company_2.jpg",
      specialization: "Service Provider",
      address: "New York, USA"
    },
    { id: 3,
      name: "Company Name",
      img: "assets/images/company/company_.jpg",
      specialization: "Supplier",
      address: "London, England"
    }
  ];

  ngOnInit() {
  }

}
