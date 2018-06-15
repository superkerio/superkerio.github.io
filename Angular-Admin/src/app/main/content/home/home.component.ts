import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tvData = [];
  public searchResultData = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getTvData()
      .subscribe(res => {
        console.log(res);
        this.tvData = res;
      });
  }
  search(text) {
    this.searchResultData = [];
    this.tvData.forEach((item) => {
      const a = (item.name.search(text) !== -1);
      const b =  (item.id === text);
      if (a || b) {
        this.searchResultData.push(item);
      }
    });
  }
  jumpTo(data) {
    this.tvData.forEach((item) => {
      item.selected = false;
    });
    data.selected = true;
    const element = document.querySelector("#" + data.name);
    element.scrollIntoView(true);
  }
}
