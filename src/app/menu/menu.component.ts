import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cont: number = 0;
  contCart: number = 0;
  products = [];
  valueForPay: number = 0;

  @Input() v: boolean = false;

  foods = [];
  drinks = [];
  desserts = [];


  constructor(private service: ServiceService, private login: NavbarComponent, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {

    this.activatedRoute.data.subscribe(data => this.foods = data.foods);
    this.activatedRoute.data.subscribe(data => this.desserts = data.desserts);
    this.activatedRoute.data.subscribe(data => this.drinks = data.drinks);

    if (environment.forward) {
      if (environment.container != "") {
        //this is very strange, because i'm need wait a little, for get a element ...       
        setTimeout(() => {
          document.getElementById(environment.container).scrollIntoView();
        }, 1000);
        environment.forward = false;
      } else {
        console.log('nulo')
      }
    } else if (!environment.forward) {
      //console.log('nothing')
    }

  }

  onOpen() {
    if (this.cont === 0) {
      document.getElementById('allcontent').style.bottom = "0";
      this.v = true;
      this.cont = 1;
    } else if (this.cont === 1) {
      document.getElementById('allcontent').style.bottom = "-400px";
      this.cont = 0;
      this.v = false;
    }
  }

  onMouse(id: any) {
    document.getElementById("number" + id).style.background = "white"
  }

  onMouseOut(id: any) {
    document.getElementById("number" + id).style.background = "#ff8800";
  }

  addCart(food, type: string) {
    document.getElementById('allcontent').style.bottom = "-400px";
    for (let i = 0; i < this.products.length; i++) {
      if (food['name'] == this.products[i].food['name']) {
        this.products[i].countAmount += 1;
        this.valueForPay += food['price'];
        this.contCart += 1;
        return
      }
    }

    this.valueForPay += food['price'];
    this.contCart += 1;
    this.products.push({ 'id': this.contCart, 'countAmount': 1, food });
  }
  
  removeCart(products: number, i: number) {

    for (let i = 0; i < this.products.length; i++) {
      if (products['id'] == this.products[i].id) {

        if (products['countAmount'] > 1) {
          this.products[i].countAmount -= 1;
          this.valueForPay -= this.products[i].food['price'];
          this.contCart -= 1;
          return
        }
        document.getElementById(String(i)).className += " AnimationList";
        setTimeout(() => {
          //needs to be in this order
          this.valueForPay -= this.products[i].food['price'];
          this.products.splice(i, 1);
          this.contCart -= 1;
          //need stay in down
          if (this.contCart === 0) {
            document.getElementById('allcontent').style.bottom = "-500px";
            this.v = false;
          }
        }, 250);
      }
    }
  }

  Logged() {
    let login = this.login.Logged();
    return login;
  }

}
