import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  { path: "addProduct", component: AddProductComponent },
  { path: "addCategory", component: AddCategoryComponent },
  { path: "child1", component: Child1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
