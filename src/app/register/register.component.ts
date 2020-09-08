import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ServiceService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
    
  }
  onRegister() {
    let userRegister = {
      user_name: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    let user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.service.register(userRegister)
      .subscribe(data => {
        console.log('registrado...');
        this.service.login(user).subscribe(response => {
          localStorage.setItem('acess_token', `${response[1].token}`)
          environment.logged = true;
          this.route.navigate(['/']);
        })
      });

  }


}
