import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

 login(email:string,password:string){debugger;
      
     return this.http.get<any>('https://angularcms.jpost.com/api/user/login/'+email+'/'+password) 
     .pipe(map(user=>{
      if (user && user.UserID) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }
     }
     ));
  }

   IsUserLoggin(){
   
    if(localStorage.getItem('currentUser')){
      return true;
    }
    else return false;
  }

  getLoginUser(){
      return localStorage.getItem('currentUser');
  }
  logout(){
    localStorage.setItem('currentUser', '');
  }

}
