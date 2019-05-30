import { RouterModule, Routes } from "@angular/router";

import { CartComponent } from "./Cart-Container/cart/cart.component";
import { CartItemsComponent } from "./Cart-Container/cart-items/cart-items.component";
import { CheckOutComponent } from "./Check-Out/check-out/check-out.component";
import { HomeComponent } from "./Home-Container/home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
