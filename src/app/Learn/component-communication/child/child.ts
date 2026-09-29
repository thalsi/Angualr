import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  name = input.required<string>();
  saved = output<string>();

  count = model(0);

   saveUser() {
    this.saved.emit('User saved successfully');
  }
}
