import {Component, OnInit} from '@angular/core';
import {EventService} from './event.service';
import {EventDTO} from '../../dto/EventDTO/EventDTO';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {PersonDTO} from "../../dto/PersonDTO/PersonDTO";
import {EventEditDTO} from "../../dto/EventDTO/EventEditDTO";
import {EventEmitterService} from "../../services/eventemitter.service";
import {Link} from "../../dto/link";
import {PublicPersonDTO} from "../../dto/PersonDTO/PublicPersonDTO";

@Component({
  providers: [EventService],
  templateUrl: ('./event.component.html'),
  styleUrls: ['./event.css']
})

export class EventComponent implements  OnInit{
  name: string;
  public edit: boolean = true;
  event: EventEditDTO;
  public selectedItem: number;
  description: string;
  date: Date;
  events: EventDTO[] = [];
  private url: string;
  private sub: Subscription;
  personName:string;
  personSurname:string;
  personTelephon:string;
  persons: PublicPersonDTO[] = [];

  constructor(private eventService: EventService, private route: ActivatedRoute, private eventEmitter: EventEmitterService) {
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
  joinToEvent(){
    this.eventService.joinToEvent(new PersonDTO(this.personName, this.personSurname, this.personTelephon), this.getShortCardLink(this.event.self)).subscribe();
    this.getPersonsList();
    this.clearFields();
  }

  public getEventsList(){
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  public getPersonsList(){
    this.eventService.getPersons(this.getShortCardLink(this.event.self)).subscribe(persons => {
      this.persons = persons;
    });
  }
  public onChangeSelectedItemColor(event, item: number) {
    this.selectedItem = item;
  }

  private onEventClicked(event: EventEditDTO): void {
    this.edit = true;
    this.event = event;
    this.description = event.description;
    this.getPersonsList();
  }

  private getShortCardLink(linkSelectedEvent: Link) {
    return this.eventEmitter.getShortLink(linkSelectedEvent);
  }

  clearFields() {
    this.personName = '';
    this.personSurname = '';
    this.personTelephon = '';
  }
}

