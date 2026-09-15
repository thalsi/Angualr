import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: '',
        loadChildren: () =>
        import('./Learn/learn.routes')
            .then(m => m.LERAN_ROUTES)
    },
    {
        path:'producs',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES)
    },
    {
        path:'',
        redirectTo:'learn',
        pathMatch:'full'
    }
];
