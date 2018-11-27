import { ExploreProgramComponent } from './../explore-program/explore-program.component';
import { ExploreProgramService } from './../services/explore-program.service';
import { ExploreProgram } from './../models/explore-program';
import { ExploreProductService } from './../services/explore-product.service';
import { Component, OnInit } from '@angular/core';
import { ExploreProduct } from '../models/explore-product';




@Component({
  selector: 'app-explore-product',
  templateUrl: './explore-product.component.html',
  styleUrls: ['./explore-product.component.css']
})
export class ExploreProductComponent implements OnInit {
  products: ExploreProduct[];
  productDetail: ExploreProduct;
  constructor(private exploreProductService: ExploreProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.exploreProductService.getProducts()
    .subscribe((products) => {
      this.products = products;
      this.getProductDetail(this.products[0].id);
    });
  }
    getProductDetail(id) {
      this.productDetail = this.getProductById(id);
    }

    getProductById(id): ExploreProduct {
      for (let i = 0; i < this.products.length; i++) {
        if (id === this.products[i].id) {
          return this.products[i];
        }
      }
    }
}
