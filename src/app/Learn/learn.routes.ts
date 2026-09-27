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
    },
    {
        path:'dependency-injection',
        loadComponent: () => import('./dependency-injection/dependency-injection').then(c=>c.DependencyInjection)
    },
    {
        path:'http-api',
        loadComponent: () => import('./http-api/http-api').then(c=>c.HttpApi)
    },
]