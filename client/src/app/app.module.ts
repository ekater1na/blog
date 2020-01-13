import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTING } from './app.routing';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    // FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
