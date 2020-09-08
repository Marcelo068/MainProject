import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { FoodsGuard } from './guards/foods.guard';
import { DessertsGuard } from './guards/desserts.guard';
import { DrinksGuard } from './guards/drinks.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, resolve: { foods: FoodsGuard, desserts: DessertsGuard, drinks: DrinksGuard } },
  { path: 'menu', component: MenuComponent, canActivate: [AuthguardGuard], resolve: { foods: FoodsGuard, desserts: DessertsGuard, drinks: DrinksGuard } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
