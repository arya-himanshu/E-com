import { RouterModule, Routes } from "@angular/router";

import { CartComponent } from "./Cart-Container/cart/cart.component";
import { HomeComponent } from "./Home-Container/home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
