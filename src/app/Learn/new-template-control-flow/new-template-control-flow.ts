import { Component, OnInit, signal } from '@angular/core';
import { TestComp } from './test-comp/test-comp';

@Component({
  imports: [TestComp],
  selector: 'app-new-template-control-flow',
  styleUrl: './new-template-control-flow.css',
  templateUrl: './new-template-control-flow.html',
})
export class NewTemplateControlFlow implements OnInit{
  status = 'active';
  isFlag=signal(true);

  emtyusers:any[]=[];
  users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'David' }
];

  ngOnInit(): void {
    const intervalId = setInterval(() => {
     this.isFlag.set(!this.isFlag());
    }, 1000);
  }
}
