import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-component-communication',
  styleUrl: './component-communication.css',
  templateUrl: './component-communication.html',
})
export class ComponentCommunication {
  userName = signal('Thasleeh');
  count = signal(10);

  onUserSaved(message: string) {
    console.log(message);
  }
}
