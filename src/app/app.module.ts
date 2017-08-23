import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './profile.component';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
