import { Component, OnInit } from '@angular/core';
import { SharedService } from "../common/service/shared.service";
import { ToastrService } from "ngx-toastr";
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    public router: Router,
    private toastr: ToastrService,
  ) {}
  ngOnInit() {
  }
  changeLanguage() {
    console.log("login changeLanguage");
    this.sharedService.emitChange();
  }
  login() {
    this.router.navigateByUrl('main/home');
    this.toastr.success('登录成功');
  }
}
