import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contactlist/contact-details/contact-details.component';
import { ContactListComponent } from './contactlist/contact-list/contact-list.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import * as express from "express";

const app = express();
const dist = __dirname + "/dist/";
app.use(express.static(dist));

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
