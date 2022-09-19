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
import {AttendeesAutocompleteComponent} from "./components/attendees-autocomplete/attendees-autocomplete.component";
import {AttendeesComponent} from "./components/attendees/attendees.component";
import {ProfileComponent} from "./components/profile/profile.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  //canActivate:[AuthGuard]
  { path: 'dashboard/user', component: UserComponent, canActivate:[AuthGuard]},
  { path: 'dashboard/reservation', component: ReservationComponent, canActivate:[AuthGuard]},
  { path: 'dashboard/room', component: RoomComponent, canActivate:[AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'dashboard/attendees', component: AttendeesComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: '', redirectTo:'login', pathMatch: "full"},
  { path: 'cao', component: AttendeesAutocompleteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
