import {Component, OnInit} from "@angular/core";
import {PersonService} from "./person.service";
import {PersonDTO} from "../../dto/PersonDTO/PersonDTO";

@Component({
  selector: 'app-root',
  templateUrl: ('./person.component.html'),
  styleUrls: ['./person.css']
})


export class PersonComponent {
  name: string;
  surname: string;
  telephon: string;

  constructor(private personService: PersonService) {
  }


  createPerson() {
    this.personService.createPerson(new PersonDTO(this.name, this.surname, this.telephon)).subscribe();
  }
}

