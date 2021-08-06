import {Brand} from "./Brand";
import {Fueltype} from "./Fueltype";
import {Garage} from "./Garage";

export class Advertisement {
  private _id: number;
  private _brand_id: Brand;
  private _fueltype_id: Fueltype;
  private _garage_id: Garage;
  private _title: string;
  private _price: number;
  private _description: string;
  private _date: Date;
  private _mileage: number;


  constructor(id: number, brand_id: Brand, fueltype_id: Fueltype, garage_id: Garage, title: string, price: number, description: string, date: Date, mileage: number) {
    this._id = id;
    this._brand_id = brand_id;
    this._fueltype_id = fueltype_id;
    this._garage_id = garage_id;
    this._title = title;
    this._price = price;
    this._description = description;
    this._date = date;
    this._mileage = mileage;
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

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get mileage(): number {
    return this._mileage;
  }

  set mileage(value: number) {
    this._mileage = value;
  }


}
