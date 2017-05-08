import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BasicTreeComponent} from "./basic/basic.component";
import {TreeTableModule} from "../../../src/treetable";

@NgModule({
  declarations: [
    AppComponent,
    BasicTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
