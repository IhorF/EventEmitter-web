import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PersonComponent} from "./person.component";
import {PersonService} from "./person.service";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'home', component: PersonComponent}
    ])],
  exports: [],
  declarations: [PersonComponent],
  providers: [PersonService],
})

export class PersonModule {
}
