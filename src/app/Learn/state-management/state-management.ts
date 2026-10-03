import { Component } from '@angular/core';
import { UserComponent } from './normal-curd/user-component/user-component';
import { List } from './rxjs-crud/list/list';
import { SingleList } from './signal/list/list';
import { User } from './ngrx/without-api/user-components/user/user';
import { UserList } from './ngrx/with-api/user-components/user-list/user-list';

@Component({
  imports: [UserComponent, List, SingleList, User, UserList],
  selector: 'app-state-management',
  styleUrl: './state-management.css',
  templateUrl: './state-management.html',
})
export class StateManagement {}
