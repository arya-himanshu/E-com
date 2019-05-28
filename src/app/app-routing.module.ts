import { RouterModule, Routes } from "@angular/router";

import { CartComponent } from "./Cart-Container/cart/cart.component";
import { CartItemsComponent } from "./Cart-Container/cart-items/cart-items.component";
import { HomeComponent } from "./Home-Container/home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "cart-item", component: CartItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
