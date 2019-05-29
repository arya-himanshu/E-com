import { Product } from "./product";

export class Cart {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  isActive: boolean;
  productImage: string;
  total: number;
}
