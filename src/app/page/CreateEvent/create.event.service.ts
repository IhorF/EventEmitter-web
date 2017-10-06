import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitterService} from '../../services/eventemitter.service';
import {EventDTO} from '../../dto/EventDTO/EventDTO';


@Injectable()
export class CreateEventService {

  constructor(private eventEmitter: EventEmitterService) {
  }


  createEvent(event: EventDTO) {
    return this.eventEmitter.post('api/event/', event).map((response: Response) => response.json());
  }
}
