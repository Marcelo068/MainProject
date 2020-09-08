import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Injectable({
  providedIn: 'root'
})

export class DessertsGuard implements Resolve<any> {
  constructor(private service: ServiceService) { }
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.service.getData('desserts');
  }

}
