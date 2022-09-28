import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'single-product/:id',
    component: SingleProductComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
