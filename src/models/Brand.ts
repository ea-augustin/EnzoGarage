export class Brand {

  private _name: string
  private _logo: string


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }


  constructor(name: string, logo: string) {
    this._name = name;
    this._logo = logo;
  }
}
