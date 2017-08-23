import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './profile.component';
import { HelloService } from './hello.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    HelloService
  ],
})
export class AppModule { }
