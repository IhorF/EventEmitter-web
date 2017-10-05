import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {PersonModule} from "./page/Person/person.module";
import {PersonService} from "./page/Person/person.service";
import {PersonComponent} from "./page/Person/person.component";
import {EventEmitterService} from "./services/eventemitter.service";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    PersonModule
  ],
  providers: [EventEmitterService, PersonService],
  bootstrap: [PersonComponent]
})
export class AppModule { }
