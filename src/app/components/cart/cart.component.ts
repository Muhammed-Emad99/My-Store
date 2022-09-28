import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
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
      });
      for (let i = 0; i < this.Products.length; i++) {
        const element = this.Products[i];
        this.total += this.Products[i].price * this.cartProduct[i].quentity;
        console.log(this.total);
        console.log(this.Products[i].price);
        console.log(this.cartProduct[i].quentity);
      }
      // this.total += this.Products[0].price * this.Products[0].quentity;
      // console.log(this.Products);
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.toastrService.success('Sucessfully Paid');
    this.router.navigateByUrl('/');

   
  }
}
