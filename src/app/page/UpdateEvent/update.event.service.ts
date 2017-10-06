import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitterService} from '../../services/eventemitter.service';
import {EventDTO} from '../../dto/EventDTO/EventDTO';
import {Observable} from 'rxjs/Observable';
import {DTOConverter} from '../../dto/converterDTO';
import {EventEditDTO} from '../../dto/EventDTO/EventEditDTO';


@Injectable()
export class UpdateEventService {

  constructor(private eventEmitter: EventEmitterService) {
  }

  public getEvents(): Observable<EventEditDTO[]> {
    return this.eventEmitter.get('api/events/').map((response: Response) =>
      <EventEditDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToEvents, response.json()));
  }
  public deleteEvent(eventLink){console.log(eventLink);
    return this.eventEmitter.delete(eventLink).map((response: Response) => console.log());
  }
}
