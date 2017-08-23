import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  text: string;

  constructor(private helloService: HelloService){}

  onButtonClick(): void {
    this.text = this.helloService.sayHello();
  }
}
