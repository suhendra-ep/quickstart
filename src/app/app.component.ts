import { Component } from '@angular/core';
import { HelloService } from './hello.service';
import { CountService } from './count.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  text: string;
  a: number;
  b: number;
  result: number;
  constructor(private helloService: HelloService, private countService: CountService){}

  onButtonClick(): void {
    this.text = this.helloService.sayHello();
  }

  onCountClick(): void {
    this.result = this.countService.add(this.a, this.b);
  }
}
