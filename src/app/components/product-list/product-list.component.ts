import { Component, OnInit } from '@angular/core';
// import { ProductListService } from 'src/app/services/product-list.service';
// import { CartService } from 'src/app/services/cart.service';
// import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/interfaces/cart';
import data from '../../../assets/json/data.json';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProductList : Array<Cart> = data; 
  // quentity: number = 1;
  // price: number = 0;

  // cart: any = [];

  constructor(
    // private cartService: CartService,
    // private service: ProductListService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  // getAmount(event :any){
  //   this.quentity = event.target.value
  //   console.log(this.quentity);
  // }

  // addToCart(Product: any) {
  //   this.cartService.getCart(Product, this.quentity);
  // }
}
