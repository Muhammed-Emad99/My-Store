import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = [];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getCart(Product: any, quentity: number) {
    if (
      this.cart.filter(
        (e: { Product: number; quentity: number }) =>
          e.Product === Product 
      ).length > 0
    ) {
      if (
        this.cart.filter(
          (e: { Product: number; quentity: number }) => e.quentity != quentity
        ).length > 0
      ) {
        let objIndex = this.cart.findIndex(((e: { Product: number; }) => e.Product == Product))
        console.log(objIndex);
        this.cart[objIndex].quentity = quentity;
        console.log(this.cart);
        alert('Product Quentity Already Modified!');
      }
      alert('Product Already Exist!');
      console.log(this.cart);
    } 
    else {
      this.cart.push({ Product, quentity });
      console.log(this.cart);
      alert('Product Added To Cart Successfully!');
    }
  }
}
