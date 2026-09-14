import { Routes } from '@angular/router';
import { ProductsList } from './products-list/products-list';
import { ProductsAdd } from './products-add/products-add';
import { ProductsEdit } from './products-edit/products-edit';
import { ProductsDetial } from './products-detial/products-detial';


export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductsList
  },
  {
    path: 'add',
    component: ProductsAdd
  },
  {
    path: ':id/edit',
    component: ProductsEdit
  },
  {
    path: ':id',
    component: ProductsDetial
  }
];