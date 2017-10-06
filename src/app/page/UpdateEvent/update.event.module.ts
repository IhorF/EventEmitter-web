import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UpdateEventComponent} from './update.event.component';
import {UpdateEventService} from './update.event.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'update', component: UpdateEventComponent},
    ])],
  exports: [],
  declarations: [UpdateEventComponent],
  providers: [UpdateEventService],
})

export class UpdateEventModule {
}
