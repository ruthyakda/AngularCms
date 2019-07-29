import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router ,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private loginService:LoginService,private router:Router) { }
  
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    debugger;
    if(this.loginService.IsUserLoggin())
       return true;
   else{
    this.router.navigate(['login']);
    return false;
   }
  }
}
