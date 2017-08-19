import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  constructor() { }

  products = [
    {
      id: 1,
      name: "Product Name",
      img: "assets/images/product/product_1.jpg",
      description: "Product Short Description. The quick brown fox jumps over the lazy dog."
    },
    {
      id: 2,
      name: "Product Name",
      img: "assets/images/product/product_2.jpg",
      description: "Product Short Description. The quick brown fox jumps over the lazy dog."
    }
  ];

  ngOnInit() {
  }

}
