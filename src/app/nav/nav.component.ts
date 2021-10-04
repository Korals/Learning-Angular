import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$ = this.accountService.currentUser$;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error=>{
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout();
  }

  /* getCurrentUser()
  getCurrentUser(){
    this.accountService.currentUser$.subscribe(error =>{
      console.log(error);
    })
  }
  */
}
