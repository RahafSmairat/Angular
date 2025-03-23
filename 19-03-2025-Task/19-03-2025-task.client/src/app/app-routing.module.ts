import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditVoucherComponent } from './edit-voucher/edit-voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { VouchersComponent } from './vouchers/vouchers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'categories', component: CategoriesComponent},
      { path: 'addProduct', component: AddProductComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'edit-voucher/:id', component: EditVoucherComponent },
      { path: 'add-voucher', component: AddVoucherComponent },
      { path: 'vouchers', component: VouchersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
