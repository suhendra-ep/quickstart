import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  price: number = 300;

  persons: any[] = [
    {
      ID: 1,
      name: 'John Doe'
    },
    {
      ID: 2,
      name: 'Tukul Shinoda'
    },
    {
      ID: 3,
      name: 'Sule Arwana'
    }
  ]
}
