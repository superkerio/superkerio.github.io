import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  iconName = "arrow_drop_down";
  constructor() { }

  ngOnInit() {
  }
  toggleProfileMenu() {
    this.iconName = this.iconName === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down";
  }
}
