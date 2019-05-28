import * as faker from "faker";

import { BehaviorSubject, Observable, Subject } from "rxjs";

import { Cart } from "../Models/cart";
import { Injectable } from "@angular/core";
import { Product } from "../Models/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}
  private products = new BehaviorSubject<any>(0);
  private localCart = new BehaviorSubject<any>(0);

  generateProductData(): Observable<Product> {
    let productsArray: Array<Product> = new Array();
    for (let i = 1; i <= 20; i++) {
      let productObj = new Product();
      productObj.id = i;
      productObj.isActive = true;
      productObj.price = faker.random.number();
      productObj.productImage = faker.image.technics();
      productObj.productName = faker.commerce.productName();
      productsArray.push(productObj);
    }
    this.products.next(productsArray);
    return this.products;
  }

  addProductToCart(product: Product) {
    if (product != undefined) {
      if (localStorage.getItem("cart") != undefined) {
        let localStorageCart: Cart;
        let cart = new Cart();
        cart.products = new Array();
        localStorageCart = JSON.parse(localStorage.getItem("cart"));
        cart.totalAmount = localStorageCart.totalAmount + product.price;
        cart.totalProduct = localStorageCart.totalProduct + 1;
        localStorageCart.products.push(product);
        for (let pro of localStorageCart.products) {
          cart.products.push(pro);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        let cart = new Cart();
        cart.products = new Array();
        cart.products.push(product);
        cart.totalAmount = product.price;
        cart.totalProduct = 1;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    this.getLocalStorageCartData();
  }

  getLocalStorageCartData(): Observable<Cart> {
    if (localStorage.getItem("cart") != undefined) {
      let cart = new Cart();
      cart = JSON.parse(localStorage.getItem("cart"));
      this.localCart.next(cart);
      return this.localCart;
    }
  }
}
