import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomNgClassDirective } from './custom-ng-class.directive';
import { CustomNgTimesDirective } from './custom-ng-times.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomNgClassDirective,
    CustomNgTimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
