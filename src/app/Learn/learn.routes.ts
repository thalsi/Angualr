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
    },
    {
        path:'signal',
        loadComponent: () => import('./signal/signal').then(c=>c.Signal)
    },
    {
        path:'new-template-control-flow',
        loadComponent: () => import('./new-template-control-flow/new-template-control-flow').then(c=>c.NewTemplateControlFlow)
    }
]