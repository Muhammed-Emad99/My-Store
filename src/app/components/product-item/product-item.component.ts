import { Component, OnInit ,Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() Product: any = [];
  Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  quentity: number = 1;
  price: number = 0;

  cart: any = [];

  constructor(
    private cartService: CartService,
    // private service: ProductListService,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  getAmount(event: any) {
    this.quentity = event.target.value;
    console.log(this.quentity);
  }

  addToCart(Product: any) {
    this.cartService.getCart(Product, this.quentity);
  }
}
