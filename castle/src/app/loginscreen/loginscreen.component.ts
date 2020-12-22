import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public LoginDetails: AuthCredentials = new AuthCredentials();
  constructor(public http: HttpClient, private router: Router) { 
  }

  ngOnInit(): void {
  }
  public submit(){

    this.Authuser().subscribe((res)=>{console.log(res)
        if (this.LoginDetails.UserName == res[0].employee_id ){
            this.router.navigate(['landingscreen']);
        }
    });

    //console.log(response);
    
  }

  public Authuser() : Observable<any> {
    return this.http.post<any>('http://localhost:3000/User/Authuser', this.LoginDetails, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}
export class AuthCredentials {
  UserName: string;
  Password: string;
}
