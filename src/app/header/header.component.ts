import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:User;
  isDisplayLogout:boolean=false;


  constructor(private loginService:LoginService,private router:Router) {
    debugger;
    if(this.loginService.IsUserLoggin())
    {
    this.user=JSON.parse(this.loginService.getLoginUser());
    }
   }

  ngOnInit() {
   
  }


  displayBtnLogout(){
    if(this.isDisplayLogout==false)
       this.isDisplayLogout=true;
    else this.isDisplayLogout=false;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);

  }
}
