export class Brand {

  private _nameBrd: string = '';
  private _id: string = '';

  get nameBrd(): string {
    return this._nameBrd;
  }

  set nameBrd(value: string) {
    this._nameBrd = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
