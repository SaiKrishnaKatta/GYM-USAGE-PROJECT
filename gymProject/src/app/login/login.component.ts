import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    error = '';
    showError = false;
    constructor(private _FB: FormBuilder, private route: Router) {
        this.form = this._FB.group({
            userName: ['', Validators.required],
            passWord: ['', Validators.required]
        })
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.form.value.userName === 'gymadmin' && this.form.value.passWord === 123456) {
            this.route.navigate(['/dashbord']);
            // } else {
            // this.showError = true;
            // this.error = "Invalid Username or PassWord";
            // }
            //  return this.form.reset();
        }
    }
}