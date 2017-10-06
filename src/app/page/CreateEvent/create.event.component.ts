import {Component, OnInit} from '@angular/core';
import {CreateEventService} from './create.event.service';
import {EventDTO} from '../../dto/EventDTO/EventDTO';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: ('./create.event.component.html'),
  styleUrls: ['./create.event.css']
})

export class CreateEventComponent implements OnInit {
  name: string;
  time: Date;
  description: string;
  date: Date;
  events: EventDTO[] = [];
  private url: string;
  private sub: Subscription;

  constructor(private createEventService: CreateEventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );

  }

  createEvent() {
    this.createEventService.createEvent(new EventDTO(this.name, this.description, this.date, this.time)).subscribe();
    this.clearFields();
  }

  clearFields() {
    this.name = '';
    this.description = '';
    this.date = null;
  }

}

