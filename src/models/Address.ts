import {City} from "./City";

export class Address {
  private _id: number;
  private _city_id: City;
  private _Street_num: string;
  private _postal_code: string;


  constructor(id: number, city_id: City, Street_num: string, postal_code: string) {
    this._id = id;
    this._city_id = city_id;
    this._Street_num = Street_num;
    this._postal_code = postal_code;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get city_id(): City {
    return this._city_id;
  }

  set city_id(value: City) {
    this._city_id = value;
  }

  get Street_num(): string {
    return this._Street_num;
  }

  set Street_num(value: string) {
    this._Street_num = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }



}
