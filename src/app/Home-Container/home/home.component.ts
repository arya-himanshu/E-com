import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/Models/product";
import { ProductService } from "src/app/Product-Container/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Array<Product> = new Array();
  ngOnInit() {
    this.productService
      .generateProductData()
      .subscribe(product => this.setResponse(product));
  }

  setResponse(response) {
    this.products = response;
  }
}
