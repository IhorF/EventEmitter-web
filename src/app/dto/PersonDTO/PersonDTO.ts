
export class PersonDTO {
  name: string;
  surname: string;
  telephon: string;


  constructor(name: string, surname: string, telephon: string) {
    this.name = name;
    this.surname = surname;
    this.telephon = telephon;
  }
}
