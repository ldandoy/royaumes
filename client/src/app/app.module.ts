import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth/auth.service';
import { KingdomService } from './services/kingdom/kingdom.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';
import { EmpireComponent } from './components/empire/empire.component';
import { KingdomDetailComponent } from './components/kingdom-detail/kingdom-detail.component';
import { CaserneComponent } from './components/caserne/caserne.component';
import { PortComponent } from './components/port/port.component';
import { TempleComponent } from './components/temple/temple.component';
import { WorldComponent } from './components/world/world.component';
import { EmpireShowComponent } from './components/empire-show/empire-show.component';
import { EmpireAttaqueComponent } from './components/empire-attaque/empire-attaque.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    EmpireComponent,
    KingdomDetailComponent,
    CaserneComponent,
    PortComponent,
    TempleComponent,
    WorldComponent,
    EmpireShowComponent,
    EmpireAttaqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, AuthService, KingdomService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
