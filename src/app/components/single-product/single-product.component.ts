import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  id!: any;
  Product: any = [];
  Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quentity: number = 1;
  price: number = 0;

  cart: any = [];

  constructor(
    private service: ProductListService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.service.getProducts().subscribe((res: any) => {
      this.Product = res[this.id - 1];
    });
  }

  getAmount(event: any) {
    this.quentity = event.target.value;
    console.log(this.quentity);
  }

  addToCart(Product: any) {
    this.cartService.getCart(Product , this.quentity);
  }
}
