import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sevise',
  templateUrl: './sevise.component.html',
  styleUrls: ['./sevise.component.scss']
})
export class SeviseComponent implements OnInit {

  constructor() { }

  servises = [
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
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 5,
      name: 'Computer Service',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 6,
      name: 'CPR/Basic Life\n' + 'Support Training jjhkbkb khikh',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 7,
      name: 'Dental Recruitment',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 8,
      name: 'Dental Software',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 9,
      name: 'Electrical Safety\n' + 'And Testing',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 10,
      name: 'Marketing',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 11,
      name: 'Others',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 12,
      name: 'Repairs',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 13,
      name: 'Solicitors hhhhhhhhhh  ',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 14,
      name: 'Surgery Design',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 15,
      name: 'Training & Courses',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 16,
      name: 'Web Designers',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 17,
      name: 'Cleaning Agenciese',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 18,
      name: 'Dental  Chair Recovery hhhhhhhhh',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 19,
      name: 'Equipment Engineering',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 20,
      name: 'Selling Gold',
      img: 'assets/images/service/accountancy.svg'
    },
    {
      id: 21,
      name: 'Uniform & Workwea',
      img: 'assets/images/service/accountancy.svg'
    }
  ];

  ngOnInit() {
  }

}
