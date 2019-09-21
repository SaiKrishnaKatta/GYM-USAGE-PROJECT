import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
registeredValues = [{
  userName:'',
  gender: '',
  age: '',
  weight: '',
  doj: '',
  email: '',
  password: '',
  confirmPassword: '',
  aerobics: '',
  yoga: '',
  gym: '',
  cardio: '',
  paidAmount: '',
  dueAmount: ''
}];
  constructor() { }

  getRegisterValues() {
    return this.registeredValues;
  }
}
