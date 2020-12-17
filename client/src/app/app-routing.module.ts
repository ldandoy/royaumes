import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { WorldComponent } from './components/world/world.component';
import { EmpireComponent } from './components/empire/empire.component';
import { EmpireShowComponent } from './components/empire-show/empire-show.component';
import { EmpireAttaqueComponent } from './components/empire-attaque/empire-attaque.component';
import { KingdomDetailComponent } from './components/kingdom-detail/kingdom-detail.component';
import { BarrackComponent } from './components/barrack/barrack.component';
import { PortComponent } from './components/port/port.component';
import { TempleComponent } from './components/temple/temple.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'world', component: WorldComponent, canActivate: [AuthGuard] },
  { path: 'empire', component: EmpireComponent, canActivate: [AuthGuard] },
  { path: ':userId/empire-show', component: EmpireShowComponent, canActivate: [AuthGuard] },
  { path: ':userId/empire-attaque', component: EmpireAttaqueComponent, canActivate: [AuthGuard] },
  { path: ':kingdomId/kingdom-detail', component: KingdomDetailComponent, canActivate: [AuthGuard] },
  { path: ':kingdomId/barrack', component: BarrackComponent, canActivate: [AuthGuard] },
  { path: ':kingdomId/port', component: PortComponent, canActivate: [AuthGuard] },
  { path: ':kingdomId/temple', component: TempleComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
