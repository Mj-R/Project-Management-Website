import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    LandingscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([ { path: '', redirectTo: "login", pathMatch: 'full'}, 
    { path: 'login', component: LoginscreenComponent },
    { path: 'landingscreen', component: LandingscreenComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
