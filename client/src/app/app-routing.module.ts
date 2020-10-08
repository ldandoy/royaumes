import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guard/auth.guard';

import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { RegisterComponent } from '../components/register/register.component';
import { EmpireComponent } from '../components/empire/empire.component';
import { KingdomDetailComponent } from '../components/kingdom-detail/kingdom-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'empire', component: EmpireComponent, canActivate: [AuthGuard] },
  { path: 'kingdom-detail/:kingdomId', component: KingdomDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
