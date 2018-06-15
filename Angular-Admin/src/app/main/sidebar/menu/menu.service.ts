import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MenuService {
  private getSidebarUrl = './assets/mock-data/sidebar.json';
  private text: string = "jinggonwanganbei";
  constructor(
    private http: HttpClient,
  ) { }
  getSidebarData(): Observable<any> {
    return this.http.get<any>(this.getSidebarUrl);
  }
  getFootText(): Observable<string> {
    return of(this.text);
  }
}
