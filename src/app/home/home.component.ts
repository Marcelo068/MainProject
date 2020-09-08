import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private service: ServiceService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  ngOnInit() {
  
    this.form = this.formBuilder.group({
      search: [null]
    })

  }

  icondiretory = "assets/icon/icon2.png";

  famousDishes = [];
  foods = this.activatedRoute.data.subscribe(data=> this.famousDishes = data.foods);

  famousDesserts = [];
  desserts = this.activatedRoute.data.subscribe(data=> this.famousDesserts = data.desserts);

  famousDrinks = [];
  drinks = this.activatedRoute.data.subscribe(data=> this.famousDrinks = data.drinks);




  onMouseSearch() {
    this.icondiretory = "assets/icon/icon.png"
  }
  onMouseSearchOut() {
    this.icondiretory = "assets/icon/icon2.png"
  }

  searchFood() {
    let value = this.form.get('search').value;
    this.service.search(this.famousDishes, value, 'cfood');
    this.service.search(this.famousDrinks, value, 'cdrink');
    this.service.search(this.famousDesserts, value, 'cdessert')
  }

  seeFood(containerfood) {
    environment.forward = true;
    environment.container = `${containerfood}`;
    this.route.navigate(['menu']);
  }

}
