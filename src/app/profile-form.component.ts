import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent  { 
  person = new Person(1, 'Sule Stinky');

  onSubmit():void {
    console.log('ID', this.person.ID);
    console.log('Name', this.person.Name);
  }
}
