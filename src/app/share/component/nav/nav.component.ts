import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  istrue:boolean=false
  constructor(private _router:Router,private _authService:AuthService) { }

  ngOnInit(): void {
  }
  Onclick(eve:any){
    console.log(eve);

  }
  Onul(){
    console.log("hello");

  }
  LogOut() {
    this._router.navigate(['/']);
    this._authService.LogOutFromApp(); //false
  }
}
