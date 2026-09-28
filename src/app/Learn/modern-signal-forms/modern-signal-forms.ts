import { Component, signal } from '@angular/core';
import {
  form,
  FormField,
  schema,
  required,
  email
} from '@angular/forms/signals';
@Component({
  standalone: true,
  imports: [FormField ],
  selector: 'app-modern-signal-forms',
  styleUrl: './modern-signal-forms.css',
  templateUrl: './modern-signal-forms.html',
})
export class ModernSignalForms  {

  // 1. Model
  user = signal({
    name: '',
    email: ''
  });

  // 2. Form + validation
  userForm = form(
    this.user,
    schema(user => {
      required(user.name);
      required(user.email);
      email(user.email);
    })
  );

  // 3. Set/update data
  setUserData() {
    this.user.set({
      name: 'Thasleeh',
      email: 'thasleeh@gmail.com'
    });
  }

  submit() {
    console.log(this.user());
  }
}