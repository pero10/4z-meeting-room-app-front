import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() notAdmin:boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")){
      this.notAdmin = false;
    }
  }

  logOut(){
    this.notAdmin = true;
    localStorage.clear();
  }

}
