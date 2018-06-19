import { Component, OnInit } from '@angular/core';
import { MenuService} from "./menu.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sidebarData = [];
  constructor(
    public menuService: MenuService,
    public router: Router,
    ) { }
  ngOnInit() {
    this.menuService.getSidebarData()
      .subscribe(res => {
        this.sidebarData = res;
        this.sidebarData.forEach((data) => {
            data.activated = false;
        });
      });
    this.menuService.getFootText()
      .subscribe(res => {
        console.log(res);
      });
  }
  activate(data) {
    data.activated = !data.activated;
    if (data.path) {
      this.router.navigateByUrl(data.path);
    }
  }
}
