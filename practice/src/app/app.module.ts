import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftcomponentComponent } from './components/leftcomponent/leftcomponent.component';
import { RightcomponentComponent } from './components/rightcomponent/rightcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftcomponentComponent,
    RightcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
