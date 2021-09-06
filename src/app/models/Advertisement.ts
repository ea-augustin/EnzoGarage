import {Brand} from "./Brand";
import {Fueltype} from "./Fueltype";
import {Garage} from "./Garage";

export class Advertisement {
  private _id: number;
  private _brand_id: Brand;
  private _fueltype_id: Fueltype;
  private _garage_id: Garage;
  private _title_adv: string;
  private _price_adv: number;
  private _description_adv: string;
  private _date: Date;
  private _mileage_adv: number;


  constructor(id: number, brand_id: Brand, fueltype_id: Fueltype, garage_id: Garage, title_adv: string, price_adv: number, description_adv: string, date: Date, mileage_adv: number) {
    this._id = id;
    this._brand_id = brand_id;
    this._fueltype_id = fueltype_id;
    this._garage_id = garage_id;
    this._title_adv = title_adv;
    this._price_adv = price_adv;
    this._description_adv = description_adv;
    this._date = date;
    this._mileage_adv = mileage_adv;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get brand_id(): Brand {
    return this._brand_id;
  }

  set brand_id(value: Brand) {
    this._brand_id = value;
  }

  get fueltype_id(): Fueltype {
    return this._fueltype_id;
  }

  set fueltype_id(value: Fueltype) {
    this._fueltype_id = value;
  }

  get garage_id(): Garage {
    return this._garage_id;
  }

  set garage_id(value: Garage) {
    this._garage_id = value;
  }

  get title_adv(): string {
    return this._title_adv;
  }

  set title_adv(value: string) {
    this._title_adv = value;
  }

  get price_adv(): number {
    return this._price_adv;
  }

  set price_adv(value: number) {
    this._price_adv = value;
  }

  get description_adv(): string {
    return this._description_adv;
  }

  set description_adv(value: string) {
    this._description_adv = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get mileage_adv(): number {
    return this._mileage_adv;
  }

  set mileage_adv(value: number) {
    this._mileage_adv = value;
  }


}
