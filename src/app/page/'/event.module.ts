import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventComponent} from './event.component';
import {EventService} from './event.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'home', component: EventComponent}
    ])],
  exports: [],
  declarations: [EventComponent],
  providers: [EventService],
})

export class EventModule {
}
