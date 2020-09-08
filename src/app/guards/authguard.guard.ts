import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private service: ServiceService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.service.authenticate().subscribe(res => {
      if (res != null) {
        environment.logged = true;
      } else {
        environment.logged = false;
      }
    }
    );
    return true;
  }

}
