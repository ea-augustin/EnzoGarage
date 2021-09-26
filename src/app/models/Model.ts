export class Model {
  private _brand_id: number = 0;
  private _logo_id : number = 0;
  private _name_mod: string = ''


  get brand_id(): number {
    return this._brand_id;
  }

  set brand_id(value: number) {
    this._brand_id = value;
  }

  get logo_id(): number {
    return this._logo_id;
  }

  set logo_id(value: number) {
    this._logo_id = value;
  }

  get name_mod() {
    return this._name_mod;
  }

  set name_mod(value) {
    this._name_mod = value;
  }
}
