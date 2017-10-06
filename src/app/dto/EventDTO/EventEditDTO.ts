import {Link} from "../link";

export class EventEditDTO {
  id: number;
  name: string;
  description: string;
  date: Date;
  time: Date;
  self: Link;


  constructor(id: number, name: string, description: string, date: Date, time: Date, self: Link) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.time = this.time;
    this.self  = self;
  }
}
