import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Router, RouterModule, Routes} from "@angular/router";
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RoomComponent } from './components/room/room.component';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { ButtonComponent } from './components/button/button.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { HomeItemComponent } from './components/home-item/home-item.component';
import { ModalTempComponent } from './components/modal-temp/modal-temp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalReservationComponent } from './components/modal-reservation/modal-reservation.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { EditRoomComponent } from './components/edit-room/edit-room.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ModalNewReservationComponent} from "./components/modal-new-reservation/modal-new-reservation.component";
import {ModalNewRoomComponent} from "./components/modal-new-room/modal-new-room.component";
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationAttendeeComponent } from './components/reservation-attendee/reservation-attendee.component';
import {CookieService} from "ngx-cookie-service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    ReservationComponent,
    RoomComponent,
    RoomItemComponent,
    RoomComponent,
    ButtonComponent,
    ReservationItemComponent,
    UserItemComponent,
    HomeItemComponent,
    ModalTempComponent,
    ModalReservationComponent,
    ModalUserComponent,
    EditReservationComponent,
    EditRoomComponent,
    EditUserComponent,
    ModalNewReservationComponent,
    ModalNewRoomComponent,
    LoginComponent,
    RegisterComponent,
    ReservationAttendeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
