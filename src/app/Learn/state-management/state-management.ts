import { Component } from '@angular/core';
import { UserComponent } from './normal-curd/user-component/user-component';
import { List } from './rxjs-crud/list/list';
import { SingleList } from './signal/list/list';
import { User } from './ngrx/without-api/user-components/user/user';

@Component({
  imports: [UserComponent, List, SingleList, User],
  selector: 'app-state-management',
  styleUrl: './state-management.css',
  templateUrl: './state-management.html',
})
export class StateManagement {}
