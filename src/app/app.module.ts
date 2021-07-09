import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app2.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent2, XyzComponent]
})
export class AppModule { }
