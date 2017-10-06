
export class EventDTO {
  name: string;
  description: string;
  date: Date;
  time: Date;


  constructor(name: string, description: string, date: Date, time: Date) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.time = this.time;
  }
}
