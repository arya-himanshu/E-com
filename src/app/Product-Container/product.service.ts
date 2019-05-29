import * as faker from "faker";

import { BehaviorSubject, Observable, Subject } from "rxjs";

import { Cart } from "../Models/cart";
import { Injectable } from "@angular/core";
import { Product } from "../Models/product";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private router: Router) {}
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
    let localStorageCart: Array<Cart> = new Array();

    if (product != undefined) {
      if (localStorage.getItem("cart") != undefined) {
        localStorageCart = JSON.parse(localStorage.getItem("cart"));
        let cartObj = new Cart();
        for (let cr of localStorageCart) {
          if (cr.productId == product.id) {
            cr.quantity += 1;
            cr.total = cr.total + product.price;
            localStorage.setItem("cart", JSON.stringify(localStorageCart));
            this.navigateTo("/cart");
            return;
          }
        }
        this.setLocalStorage(localStorageCart, product);
        this.navigateTo("/cart");
      } else {
        this.setLocalStorage(localStorageCart, product);
        this.navigateTo("/cart");
      }
    }
    this.getLocalStorageCartData();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  setLocalStorage(localStorageCart, product) {
    localStorageCart.push(this.setCart(product));
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  }

  setCart(product) {
    let cartObj = new Cart();
    cartObj.productId = product.id;
    cartObj.price = product.price;
    cartObj.productImage = product.productImage;
    cartObj.productName = product.productName;
    cartObj.quantity = 1;
    cartObj.total = product.price;
    return cartObj;
  }

  getLocalStorageCartData(): Observable<Cart> {
    if (
      localStorage.getItem("cart") != undefined &&
      localStorage.getItem("cart").length > 0
    ) {
      let cart: Array<Cart> = new Array();
      cart = JSON.parse(localStorage.getItem("cart"));
      this.localCart.next(cart);
      return this.localCart;
    } else {
      return this.localCart;
    }
  }
}
