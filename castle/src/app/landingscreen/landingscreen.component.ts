import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.css']
})
export class LandingscreenComponent implements OnInit {

  public details:any[]; 
  constructor(public http: HttpClient, private router: Router) {
    this.GetDetails().subscribe((res)=>{
      this.details = res;
      console.log(res)});
   }

  ngOnInit(): void {
  }

  public GetDetails() : Observable<any> {
    return  this.http.get<any>('http://localhost:3000/User/GetDetails',
      {
        params: {
        }
      });

  }

public logout(){
  this.router.navigate(["login"]);
} 
  
}
