import { Component, OnInit } from '@angular/core';
import { SharedService } from "../common/service/shared.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private sharedService: SharedService
  ) {}
  ngOnInit() {
  }
  changeLanguage() {
    console.log("login changeLanguage");
    this.sharedService.emitChange();
  }
}
