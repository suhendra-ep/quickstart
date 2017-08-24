import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './profile.component';
import { HelloService } from './hello.service';
import { CountService } from './count.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    HelloService,
    CountService
  ],
})
export class AppModule { }
