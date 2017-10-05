import {Component, OnInit} from '@angular/core';
import {EventService} from './event.service';
import {EventDTO} from '../../dto/EventDTO/EventDTO';

@Component({
 /* selector: 'app-root',*/
  templateUrl: ('./event.component.html'),
  styleUrls: ['./event.css']
})

export class EventComponent {
  name: string;
  description: string;
  date: Date;

  constructor(private eventService: EventService) {
  }


  createPerson() {
    this.eventService.createEvent(new EventDTO(this.name, this.description, this.date)).subscribe();
  }
}

