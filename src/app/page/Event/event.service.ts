import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitterService} from '../../services/eventemitter.service';
import {Observable} from 'rxjs/Observable';
import {EventEditDTO} from '../../dto/EventDTO/EventEditDTO';
import {DTOConverter} from '../../dto/converterDTO';
import {PersonDTO} from '../../dto/PersonDTO/PersonDTO';
import {PublicPersonDTO} from "../../dto/PersonDTO/PublicPersonDTO";


@Injectable()
export class EventService {

  constructor(private eventEmitter: EventEmitterService) {
  }

  public getEvents(): Observable<EventEditDTO[]> {
    return this.eventEmitter.get('api/events/').map((response: Response) =>
      <EventEditDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToEvents, response.json()));
  }

  public getPersons(linkToEvent): Observable<PublicPersonDTO[]> {
    return this.eventEmitter.get(linkToEvent + '/persons').map((response: Response) =>
      <PublicPersonDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPersons, response.json()));
  }

  joinToEvent(personDTO: PersonDTO, linkToEvent) {
    return this.eventEmitter.post(linkToEvent, personDTO).map((response: Response) => response.json());
  }
}
