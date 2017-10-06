import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {UpdateEventService} from './update.event.service';
import {Link} from '../../dto/link';
import {EventEmitterService} from '../../services/eventemitter.service';
import {EventEditDTO} from '../../dto/EventDTO/EventEditDTO';

@Component({
  templateUrl: ('./update.event.component.html'),
  styleUrls: ['./update.event.css']
})

export class UpdateEventComponent implements OnInit {
  name: string;
  public edit: boolean = true;
  event: EventEditDTO;
  public selectedItem: number;
  description: string;
  date: Date;
  time: Date;
  events: EventEditDTO[] = [];
  private url: string;
  private sub: Subscription;

  constructor(private updateEventService: UpdateEventService, private route: ActivatedRoute, private eventEmitter: EventEmitterService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );
    this.getEventsList();
  }

  public getEventsList() {
    this.updateEventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  public onChangeSelectedItemColor(event, item: number) {
    this.selectedItem = item;
  }

  private onEventClicked(event: EventEditDTO): void {
    this.edit = true;
    this.event = event;
    this.description = event.description;
  }

  private getShortCardLink(linkSelectedEvent: Link) {
    return this.eventEmitter.getShortLink(linkSelectedEvent);
  }

  deleteSelectedEvent() {
    this.updateEventService.deleteEvent(this.getShortCardLink(this.event.self)).subscribe(() => {
      this.getEventsList();
      this.event = null;
    });
  }

}

