import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  showError = false;
  constructor(private readonly _Fb: FormBuilder,
    private commonService: CommonService) { 
    this.registerForm = this._Fb.group({
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
    })
  }

  ngOnInit() {
  }

  onRegister(id) {
    const password = this.registerForm.get('password').value;
    const confirmPassword = this.registerForm.get('confirmPassword').value;
    if (password === confirmPassword) {
      this.commonService.registeredValues.push(this.registerForm.value);
      localStorage.setItem(this.registerForm.value, id);
    } else {
        this.showError = true;
        this.errorMessage = 'PassWord and Confirm Password not matched';
    }
  }

}
