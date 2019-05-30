import { Component, Input, OnInit } from "@angular/core";

import { Product } from "src/app/Models/product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() products: Array<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  // by calling this function we can add prodcut to cart and redirect to cart
  addToCart(product, path) {
    this.productService.addProductToCart(product, path);
  }
}
