import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.AuthService.isUserLogged) {
      return true;
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops..',
        text: 'You are not logged in!',
        footer: 'Please login to continue',
        confirmButtonText: 'Login',
        confirmButtonColor: '#ffd333',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      });

     
      return false;

      
    }
  }
}
