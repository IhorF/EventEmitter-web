import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CreateEventComponent} from './create.event.component';
import {CreateEventService} from './create.event.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'create', component: CreateEventComponent},
    ])],
  exports: [],
  declarations: [CreateEventComponent],
  providers: [CreateEventService],
})

export class CreateEventModule {
}
