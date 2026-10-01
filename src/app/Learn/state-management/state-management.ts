import { Component } from '@angular/core';
import { UserComponent } from './normal-curd/user-component/user-component';
import { List } from './rxjs-crud/list/list';
import { SingleList } from './signal/list/list';

@Component({
  imports: [UserComponent, List, SingleList],
  selector: 'app-state-management',
  styleUrl: './state-management.css',
  templateUrl: './state-management.html',
})
export class StateManagement {}
