import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeTableModule } from 'ng-treetable';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, TreeTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
