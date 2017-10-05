import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitterService} from '../../services/eventemitter.service';
import {PersonDTO} from '../../dto/PersonDTO/PersonDTO';


@Injectable()
export class PersonService {

  constructor(private eventEmitter: EventEmitterService) {
  }


  createPerson(person: PersonDTO) {
    return this.eventEmitter.post('api/person/', person).map((response: Response) => response.json());
  }
}
