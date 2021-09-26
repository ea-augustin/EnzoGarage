export class Fueltype {
  private _type_ful: string = '';
  private _id: string = '';

  get type_ful(): string {
    return this._type_ful;
  }

  set type_ful(value: string) {
    this._type_ful = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
