import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {ReservationComponent} from "./components/reservation/reservation.component";
import {RoomComponent} from "./components/room/room.component";
// import {LoginComponent} from "./components/login/login.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
  //canActivate:[AuthGuard]
  { path: 'dashboard/user', component: UserComponent },
  { path: 'dashboard/reservation', component: ReservationComponent },
  { path: 'dashboard/room', component: RoomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: '', redirectTo:'login', pathMatch: "full"},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
