import { makeAutoObservable } from "mobx";
import i from "assets/img/iphone.jpg";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфон" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      { id: 1, name: "IPhone 1", price: 2000, rating: 2, image: { i } },
      { id: 2, name: "IPhone 2", price: 3000, rating: 2, image: { i } },
      { id: 3, name: "IPhone 3", price: 4000, rating: 2, image: { i } },
      { id: 4, name: "IPhone 4", price: 5000, rating: 2, image: { i } },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
