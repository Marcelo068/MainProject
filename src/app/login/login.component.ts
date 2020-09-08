import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ServiceService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group(
      {
        email: [null, Validators.required],
        password: [null, Validators.required]
      }
    )

  }

  onLogin() {

    let user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.service.login(user).subscribe(response => {
      if (response == null) {
        document.getElementById('warning').style.right = "10px";
        document.getElementById('warning').style.transition = "all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275)";
        document.getElementById('warning').style.opacity = "1";
        setTimeout(() => {
          document.getElementById('warning').style.right = "-271px";
          document.getElementById('warning').style.transition = "all 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045)";
          document.getElementById('warning').style.opacity = "0";
        }, 1600);
      } else {
        localStorage.setItem('acess_token', `${response[1].token}`)
        environment.logged = true;
        this.route.navigate(['/']);
      }
    });;

  }
  timeWarning() {
    document.getElementById('warning').style.right = "-271px";
    document.getElementById('warning').style.transition = "all 400ms cubic-bezier(0.600, -0.280, 0.735, 0.045)";
    document.getElementById('warning').style.opacity = "0";
  }
  
}
