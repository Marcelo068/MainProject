import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'website';
  count = 0;
  name: string = null;
  especifCont = 0;

  constructor(private route: Router, private service: ServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //annotiatons about my others tryin:
    // let name: any;
    // this.activatedRoute.data.subscribe((data: { user: any }) => name = data);
    // environment.User = name.users[0].user.username;
    // console.log(environment.User);
    // this.service.authenticate().subscribe(data => { console.log(data); this.name = data }); 
    
    
    //i'm dont get use a method Logged() because angular show an error
    if (environment.logged == true) {
      this.service.authenticate().subscribe(res => this.name = res[0]?.user.username);
    }

  }
  onDisplayHeader() {
    if (this.route.url === '/login' || this.route.url === '/register') {
      return false;
    }
    return true;
  }

  public Logged() {
    if (environment.logged == true) {
      if (this.especifCont == 0) {
        this.ngOnInit();
        this.especifCont = 1;
      }
      return true;
    } else {
      return false;
    }
  }
  Logout() {
    environment.logged = false;
    localStorage.removeItem('acess_token');
    this.especifCont = 0;
    this.name = null;
  }
  Profile() {
    if (this.count == 0) {
      // document.getElementById('header-lg').style.backgroundColor='rgba(255, 136, 0, 1)';
      document.getElementById('boxLog').style.display = 'flex';
      document.getElementById('arrowicon').style.transform = 'rotate(90deg)'
      this.count = 1;
    } else if (this.count == 1) {
      document.getElementById('arrowicon').style.transform = 'rotate(-90deg)';
      // document.getElementById('header-lg').style.backgroundColor='rgba(255, 136, 0, 0.8)';
      document.getElementById('boxLog').style.display = 'none';
      this.count = 0;
    }
  }
}
