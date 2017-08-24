import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  services = [
    {
      id: 1,
      name: 'Accountancy',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 2,
      name: 'Associations',
      img: 'assets/images/service/associations.svg'
    },
    {
      id: 3,
      name: 'Buy/Sell Dental Practice',
      img: 'assets/images/service/buy.svg'
    },
    {
      id: 4,
      name: 'Clinical Waste Collection',
      img: 'assets/images/service/collection.svg'
    },
    {
      id: 5,
      name: 'Computer Service',
      img: 'assets/images/service/computer.svg'
    },
    {
      id: 6,
      name: 'CPR/Basic Life\n' + 'Support Training jjhkbkb khikh',
      img: 'assets/images/service/cpr.svg'
    },
    {
      id: 7,
      name: 'Dental Recruitment',
      img: 'assets/images/service/dental_recruitment.svg'
    },
    {
      id: 8,
      name: 'Dental Software',
      img: 'assets/images/service/dental_software.svg'
    },
    {
      id: 9,
      name: 'Electrical Safety\n' + 'And Testing',
      img: 'assets/images/service/electrical_safety.svg'
    },
    {
      id: 10,
      name: 'Marketing',
      img: 'assets/images/service/marketing.svg'
    },
    {
      id: 11,
      name: 'Others',
      img: 'assets/images/service/others.svg'
    },
    {
      id: 12,
      name: 'Repairs',
      img: 'assets/images/service/repairs.svg'
    },
    {
      id: 13,
      name: 'Solicitors hhhhhhhhhh  ',
      img: 'assets/images/service/solicitors.svg'
    },
    {
      id: 14,
      name: 'Surgery Design',
      img: 'assets/images/service/surgery_design.svg'
    },
    {
      id: 15,
      name: 'Training & Courses',
      img: 'assets/images/service/training_courses.svg'
    },
    {
      id: 16,
      name: 'Web Designers',
      img: 'assets/images/service/web_designers.svg'
    },
    {
      id: 17,
      name: 'Cleaning Agenciese',
      img: 'assets/images/service/cleaning_agenciese.svg'
    },
    {
      id: 18,
      name: 'Dental  Chair Recovery hhhhhhhhh',
      img: 'assets/images/service/dental_chair.svg'
    },
    {
      id: 19,
      name: 'Equipment Engineering',
      img: 'assets/images/service/engineering.svg'
    },
    {
      id: 20,
      name: 'Selling Gold',
      img: 'assets/images/service/selling_gold.svg'
    },
    {
      id: 21,
      name: 'Uniform & Workwea',
      img: 'assets/images/service/uniform_workwea.svg'
    }
  ];

  ngOnInit() {
  }

}
