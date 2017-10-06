import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {EventEmitterService} from './services/eventemitter.service';
import {EventService} from './page/event/event.service';
import {EventModule} from './page/event/event.module';
import {HomeComponent} from './page/home/home.component';
import {HomeService} from './page/home/home.service';
import {CreateEventService} from './page/CreateEvent/create.event.service';
import {CreateEventModule} from './page/CreateEvent/create.event.module';
import {UpdateEventModule} from "./page/UpdateEvent/update.event.module";
import {UpdateEventService} from "./page/UpdateEvent/update.event.service";

@NgModule({
  declarations: [HomeComponent
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
    EventModule,
    CreateEventModule,
    UpdateEventModule
  ],
  providers: [EventEmitterService, EventService, HomeService, CreateEventService, UpdateEventService ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
