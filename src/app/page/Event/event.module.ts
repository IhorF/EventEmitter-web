import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventComponent} from './event.component';
import {EventService} from './event.service';
import {CreateEventComponent} from '../CreateEvent/create.event.component';
import {CreateEventService} from '../CreateEvent/create.event.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'home', component: EventComponent},
    ])],
  exports: [],
  declarations: [EventComponent],
  providers: [EventService],
})

export class EventModule {
}
