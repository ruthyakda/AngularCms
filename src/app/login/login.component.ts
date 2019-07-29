import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm :FormGroup;
  submitted = false;

  constructor(private loginservice:LoginService,private route:Router) {

   this.loginForm = new FormGroup({
      userName: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    });
   }

  ngOnInit() {
  }

  submit() { 
    this.submitted=true; 
    let m = this.loginForm.controls.userName.value;
    let p = this.loginForm.controls.password.value;

    this.loginservice.login(m,p).subscribe(data => {
      this.route.navigate(['/LatestArticles']);
    } , 
      error => { console.log(error.status)} );;
    

    

  }

}
