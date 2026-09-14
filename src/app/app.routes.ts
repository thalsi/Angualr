import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'producs',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES)
    },
    {
        path:'',
        redirectTo:'producs',
        pathMatch:'full'
    }
];
