import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonService } from '../common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    error = '';
    credentials= {
        userName : "sai",
        passWord : "123456"
      }
    showError = false;
    formData = [];
    constructor(private _FB: FormBuilder,
         private route: Router,
         private auth: AuthService,
         private commonService: CommonService) {
        this.form = this._FB.group({

            userName: ['', Validators.required],
            passWord: ['', Validators.required]
        })
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.form !== undefined) {
            const registeredData = this.commonService.registeredValues;
            for (let i=0; i< registeredData.length; i++) {
                const userName = registeredData[i].userName;
                const passWord = registeredData[i].password;
                if (userName === this.credentials.userName && 
                    passWord === this.credentials.passWord) {
                    this.route.navigate(['/dashboard']);
                } 
            }   
            } else {
            this.showError = true;
            this.error = "Invalid Username or PassWord";
            }
             return this.form.reset();
    }
}