import {Link} from './link';
import {EventEditDTO} from '../dto/EventDTO/EventEditDTO';
import {PublicPersonDTO} from "./PersonDTO/PublicPersonDTO";

export class DTOConverter {

  public static jsonToEvents(data: any): EventEditDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new EventEditDTO(data.id, data.name, data.description, data.date, data.time, self);
  }
  public static jsonToPersons(data: any): PublicPersonDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new PublicPersonDTO(data.name, data.surname);
  }

  public static jsonToLink(rel: string, data: any): Link {
    return new Link(rel, data.href);
  }
  public static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any> {
    const array: Array<any> = [];
    data.forEach(element => {
      array.push(callback(element));
    });
    return array;
  }
}
