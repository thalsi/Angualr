# Angular 22 Learning Checklist

## 🎯 Recommended Priority

### 🔴 MUST MASTER
- [ ] TypeScript
- [ ] Components
- [ ] Standalone Components
- [ ] Dependency Injection
- [ ] Routing
- [ ] RxJS
- [ ] Signals ⭐⭐⭐
- [ ] @if / @for / @switch
- [ ] HTTP / Interceptors
- [ ] Reactive Forms
- [ ] Signal Forms
- [ ] State Management
- [ ] Performance
- [ ] Testing

### 🟠 MUST KNOW
- [ ] Resource API
- [ ] httpResource()
- [ ] input() / output()
- [ ] linkedSignal()
- [ ] effect()
- [ ] Change Detection
- [ ] OnPush
- [ ] Lazy Loading
- [ ] @defer
- [ ] Angular CDK
- [ ] Security

### 🟡 ADVANCED
- [ ] SSR
- [ ] SSG
- [ ] Hydration
- [ ] Incremental Hydration
- [ ] Zoneless
- [ ] Angular Aria
- [ ] Route-level render mode
- [ ] Advanced performance
- [ ] Custom rendering
- [ ] Advanced testing

### 🧭 Best Learning Order (coming from Angular 12)
1. Standalone Components
2. inject()
3. input() / output()
4. @if / @for / @switch
5. Signals ⭐⭐⭐
6. computed()
7. effect()
8. linkedSignal()
9. Signals + RxJS
10. Reactive Forms
11. Signal Forms
12. HTTP + Interceptors
13. Resource
14. httpResource
15. Routing + Lazy Loading
16. NgRx / Signal Store
17. OnPush + Change Detection
18. Zoneless
19. @defer
20. SSR + SSG
21. Hydration
22. Incremental Hydration
23. Testing + Vitest
24. Performance
25. Security

---

## 🟢 1. Angular Fundamentals — Must Know
- [x] Angular CLI
- [x] Project structure
- [x] Components
- [x] Templates
- [x] Data binding
  - [x] Interpolation `{{ }}`
  - [x] Property binding `[ ]`
  - [x] Event binding `( )`
  - [x] Two-way binding `[( )]`
- [x] Directives
- [x] Pipes
- [x] Services
- [x] Dependency Injection
- [x] Lifecycle hooks
- [x] ViewChild / ContentChild
- [X] Content projection
- [X] Component communication

---

## ⭐ 2. Standalone Architecture
> Very important for Angular 22.

- [ ] Standalone Components
- [ ] Standalone Directives
- [ ] Standalone Pipes
- [ ] `imports: []`
- [ ] `bootstrapApplication()`
- [ ] `ApplicationConfig`
- [ ] Providers
- [ ] `provideRouter()`
- [ ] `provideHttpClient()`

**Old:**
```
AppModule
 ├── declarations
 ├── imports
 └── providers
```

**Modern:**
```
main.ts
   ↓
bootstrapApplication()
   ↓
Standalone Components
```

---

## ⭐⭐⭐ 3. Signals
> One of the most important topics in Angular 22.

Learn in this order:
- [ ] `signal()`
- [ ] `computed()`
- [ ] `effect()`
- [ ] `WritableSignal`
- [ ] Read / write / update
- [ ] Signal inputs
- [ ] Signal outputs
- [ ] `linkedSignal()`
- [ ] Signals + components
- [ ] Signals + services
- [ ] Signals + RxJS

```ts
count = signal(0);

doubleCount = computed(() => this.count() * 2);

increment() {
  this.count.update(value => value + 1);
}
```

---

## ⭐⭐⭐ 4. New Template Control Flow

**Old Angular:**
```html
<div *ngIf="isLoggedIn">
  Welcome
</div>
```

**Angular 22:**
```html
@if (isLoggedIn) {
  <div>Welcome</div>
}
```

- [ ] `@if`
- [ ] `@else`
- [ ] `@else if`
- [ ] `@for`
- [ ] `track`
- [ ] `@empty`
- [ ] `@switch`
- [ ] `@case`
- [ ] `@default`
- [ ] `@defer`
- [ ] `@placeholder`
- [ ] `@loading`
- [ ] `@error`

```html
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
} @empty {
  <p>No users</p>
}
```

---

## ⭐⭐⭐ 5. Dependency Injection
- [ ] `inject()`
- [ ] Services
- [ ] Providers
- [ ] `providedIn: 'root'`
- [ ] Component providers
- [ ] Injection tokens
- [ ] `InjectionToken`
- [ ] Provider configuration
  - [ ] `useClass`
  - [ ] `useValue`
  - [ ] `useFactory`
  - [ ] `useExisting`

**Modern Angular:**
```ts
private userService = inject(UserService);
```

---

## ⭐⭐⭐ 6. Routing
- [ ] `provideRouter()`
- [ ] Routes
- [ ] `routerLink`
- [ ] `Router`
- [ ] Route parameters
- [ ] Query parameters
- [ ] Child routes
- [ ] Lazy loading
- [ ] Route guards
- [ ] Resolvers
- [ ] Route data
- [ ] Redirects
- [ ] Wildcard routes
- [ ] Preloading
- [ ] Route-level providers
- [ ] Route-level render mode

```ts
export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component')
        .then(m => m.UsersComponent)
  }
];
```

---

## ⭐⭐⭐ 7. RxJS
> Don't skip this, even though Angular is moving toward Signals.

**Core**
- [ ] Observable
- [ ] Observer
- [ ] Subscription
- [ ] Subject
- [ ] BehaviorSubject
- [ ] ReplaySubject
- [ ] AsyncSubject

**Operators**
- [ ] map
- [ ] filter
- [ ] tap
- [ ] switchMap
- [ ] mergeMap
- [ ] concatMap
- [ ] exhaustMap
- [ ] catchError
- [ ] finalize
- [ ] debounceTime
- [ ] distinctUntilChanged
- [ ] combineLatest
- [ ] forkJoin
- [ ] withLatestFrom
- [ ] shareReplay

**Angular + RxJS**
- [ ] `toSignal()`
- [ ] `toObservable()`
- [ ] `takeUntilDestroyed()`
- [ ] AsyncPipe

---

## ⭐⭐⭐ 8. HTTP / API
- [ ] HttpClient
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] HTTP headers
- [ ] Query parameters
- [ ] Interceptors
- [ ] Error handling
- [ ] Retry
- [ ] Authentication token
- [ ] Loading state
- [ ] API services

> `httpResource()` is stable since Angular 22 and exposes HTTP request state/results as signals.

---

## ⭐⭐⭐ 9. Resource API
> `resource()` is stable since Angular 22, designed for asynchronous read operations managed through signals.

- [ ] `resource()`
- [ ] Resource
- [ ] params
- [ ] loader
- [ ] `value()`
- [ ] `isLoading()`
- [ ] `error()`
- [ ] `status()`
- [ ] `hasValue()`
- [ ] `reload()`
- [ ] AbortSignal
- [ ] Resource + Signals
- [ ] Resource + SSR

---

## ⭐⭐⭐ 10. httpResource()
> Learn separately from normal HttpClient.

```
HttpClient
    ↓
Observable

vs

httpResource()
    ↓
Signal-based HTTP state
```

- [ ] GET request
- [ ] Reactive URL
- [ ] Loading
- [ ] Error
- [ ] Response value
- [ ] `hasValue()`
- [ ] `isLoading()`
- [ ] Interceptors
- [ ] Testing
- [ ] SSR/Transfer cache

> Angular docs recommend normal HttpClient for mutations (POST/PUT) rather than httpResource().

---

## ⭐⭐⭐ 11. Forms

**Traditional Forms**
- [ ] Template-driven Forms
- [ ] Reactive Forms
- [ ] FormControl
- [ ] FormGroup
- [ ] FormArray
- [ ] Validators
- [ ] Custom validators
- [ ] Async validators
- [ ] Dynamic forms
- [ ] Custom form controls
- [ ] ControlValueAccessor

**Modern Signal Forms**
- [ ] `form()`
- [ ] FieldTree
- [ ] FormField
- [ ] `schema()`
- [ ] `required()`
- [ ] Validation
- [ ] Custom validation
- [ ] Async validation
- [ ] Model ↔ form synchronization

> Signal Forms are stable in Angular 22, built around a signal-based model.
> For existing Angular 12 enterprise projects: Reactive Forms still matters. For new Angular 22 projects, also learn Signal Forms.

---

## ⭐⭐ 12. Component Communication

```
Parent
  ↓
input()

Child
  ↓
output()

Parent
```

- [ ] `input()`
- [ ] `input.required()`
- [ ] `output()`
- [ ] Model inputs / two-way binding
- [ ] Signal inputs
- [ ] Content projection
- [ ] Services for shared state

---

## ⭐⭐⭐ 13. State Management

```
Component State
      ↓
Signals
      ↓
Services
      ↓
RxJS
      ↓
NgRx
```

- [ ] Local Signals
- [ ] Shared Signals
- [ ] Signal-based services
- [ ] RxJS state
- [ ] NgRx Store
- [ ] Actions
- [ ] Reducers
- [ ] Selectors
- [ ] Effects
- [ ] Entity
- [ ] Signal Store

> For large enterprise applications, NgRx is still worth learning.

---

## ⭐⭐ 14. Lifecycle
- [ ] `ngOnInit`
- [ ] `ngOnChanges`
- [ ] `ngOnDestroy`
- [ ] `ngAfterViewInit`
- [ ] `ngAfterContentInit`
- [ ] `DestroyRef`
- [ ] `afterNextRender`
- [ ] `afterEveryRender`

---

## ⭐⭐⭐ 15. SSR / SSG

**SSR**
```
Browser
 ↓
Server
 ↓
HTML
 ↓
Browser
```

**SSG / Prerender**
```
Build time
 ↓
HTML generated
 ↓
CDN
 ↓
User
```

- [ ] Angular SSR
- [ ] SSG / Prerendering
- [ ] Hydration
- [ ] Incremental hydration
- [ ] TransferState
- [ ] Server routes
- [ ] Browser/server differences
- [ ] SEO
- [ ] Meta tags
- [ ] Canonical URLs
- [ ] `@defer`
- [ ] Route-level rendering

> Hydration reuses the server-rendered DOM instead of recreating it, helping performance and Core Web Vitals.

---

## ⭐⭐⭐ 16. Zoneless

```
Zone.js
   ↓
Change Detection

versus:

Signals / Events
       ↓
Angular
       ↓
Targeted updates
```

- [ ] What is Zone.js?
- [ ] Traditional change detection
- [ ] OnPush
- [ ] Signals
- [ ] Zoneless
- [ ] `provideZonelessChangeDetection()`
- [ ] How Signals trigger updates
- [ ] Performance implications

---

## ⭐⭐ 17. Change Detection
- [ ] Default change detection
- [ ] OnPush
- [ ] `ChangeDetectorRef`
- [ ] `markForCheck()`
- [ ] `detectChanges()`
- [ ] Signals and change detection
- [ ] Zoneless change detection

---

## ⭐⭐ 18. Angular Animations
- [ ] CSS animations
- [ ] Angular animation APIs
- [ ] Enter/leave animations
- [ ] Animation triggers
- [ ] Transitions

> For many modern UI projects, CSS animations are sufficient, but understand Angular's animation ecosystem too.

---

## ⭐⭐ 19. Angular CDK
- [ ] Overlay
- [ ] Dialog
- [ ] Portal
- [ ] Drag & Drop
- [ ] Virtual Scroll
- [ ] Clipboard
- [ ] Accessibility
- [ ] Scrolling
- [ ] Layout utilities

---

## ⭐⭐ 20. Angular Aria
- [ ] Accessibility
- [ ] Keyboard navigation
- [ ] ARIA roles
- [ ] Tabs
- [ ] Menu
- [ ] Combobox
- [ ] Listbox
- [ ] Dialog
- [ ] Accordion

---

## ⭐⭐ 21. Testing
- [ ] Unit testing
- [ ] TestBed
- [ ] Component testing
- [ ] Service testing
- [ ] HTTP testing
- [ ] Router testing
- [ ] Signal testing
- [ ] httpResource testing
- [ ] Vitest
- [ ] E2E testing

---

## ⭐⭐ 22. Performance
- [ ] Lazy loading
- [ ] `@defer`
- [ ] `@for` track
- [ ] OnPush
- [ ] Signals
- [ ] Zoneless
- [ ] SSR
- [ ] SSG
- [ ] Hydration
- [ ] Incremental hydration
- [ ] Bundle optimization
- [ ] Image optimization
- [ ] Virtual scrolling

---

## ⭐ 23. Security
> Must know for enterprise projects.

- [ ] XSS
- [ ] Sanitization
- [ ] DomSanitizer
- [ ] CSP
- [ ] CORS
- [ ] Authentication
- [ ] Authorization
- [ ] JWT
- [ ] Interceptors
- [ ] Route Guards
- [ ] Secure storage concepts

---

## ⭐ 24. Angular CLI / Build

```
ng new
ng serve
ng build
ng test
ng generate
ng update
ng add
```

- [ ] `angular.json`
- [ ] tsconfig
- [ ] environments
- [ ] production builds
- [ ] build configurations
- [ ] lazy chunks
- [ ] source maps
- [ ] budgets
- [ ] Vite
- [ ] esbuild

---

## ⭐⭐⭐ 25. TypeScript
> For Angular 22, TypeScript should be strong.

- [ ] Interfaces
- [ ] Types
- [ ] Generics
- [ ] Union
- [ ] Intersection
- [ ] Type guards
- [ ] `keyof`
- [ ] `typeof`
- [ ] Utility types
- [ ] Enums
- [ ] Classes
- [ ] Decorators
- [ ] Optional chaining
- [ ] Nullish coalescing
- [ ] Async/await
- [ ] Promises