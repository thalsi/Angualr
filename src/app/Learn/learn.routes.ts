import { Routes } from "@angular/router";
import { Leran } from "./leran";

export const LERAN_ROUTES:Routes = [
    {
        path:'',
        component:Leran
    },
    {
        path:'fundamentals',
        loadComponent: () =>
          import('./fundamentals/fundamentals')
            .then(m => m.Fundamentals)
    },
    {
        path:'rxjs',
        loadComponent: () => import('./rxjs/rxjs').then(m=>m.Rxjs)
    }
]