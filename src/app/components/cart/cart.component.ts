import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: number = 1;
  idArr: any = [];
  Products: any = [];
  cartProduct: any = [];
  loginForm: any = FormGroup;
  submitted = false;
  result: any;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private service: ProductListService,
    private formBuilder: FormBuilder,
    public router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      credit: ['', [Validators.required, Validators.minLength(16)]],
    });

    this.getCart();
    this.getProducts();
    this.getAllProducts();
    // this.getTotal();
  }

  get f() {
    return this.loginForm.controls;
  }

  getCart() {
    this.cartProduct = this.cartService.cart;
    console.log(this.cartProduct);
  }

  getProducts() {
    this.cartProduct.forEach((element: any) => {
      this.id = element.Product;
      this.idArr.push(element.Product);
      console.log(this.idArr);
    });
  }

  getAllProducts() {
    this.service.getProducts().subscribe((res: any) => {
      this.idArr.forEach((element: any) => {
        this.Products.push(res[element - 1]);
        console.log(this.Products[0].price);
      });
      this.getTotal();
    });
  }
  getTotal() {
    for (let i = 0; i < this.Products.length; i++) {
      const element = this.Products[i];
      this.total += this.Products[i].price * this.cartProduct[i].quentity;
      console.log(this.total);
      console.log(this.Products[i].price);
      console.log(this.cartProduct[i].quentity);
    }
  }
  onSubmit(loginForm :NgForm) {
    this.submitted = true;

    // // stop here if form is invalid
    if (this.loginForm.invalid && this.total === 0) {
      return;
    }

    else{
      alert('Sucessfully Paid!');
      this.router.navigateByUrl('/success');
      while (this.cartProduct.length > 0) {
        this.cartProduct.pop();
      }
      console.log(loginForm.value, loginForm.valid);
    }

    // this.toastrService.success('Sucessfully Paid');

  }

  removeFromCart(id: any) {
    let index = this.cartProduct.indexOf(id);
    let DeletedItemPrice =
      this.Products[index].price * this.cartProduct[index].quentity;
    this.total -= DeletedItemPrice;
    this.cartProduct.splice(index, 1);
    this.Products.splice(index, 1);
    alert('Deleted Sucessfully!');
  }
}
