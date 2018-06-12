import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MenuService {
  private getSidebarUrl = './assets/mock-data/sidebar.json';
  constructor(
    private http: HttpClient,
  ) { }
  getSidebarData(): Observable<any> {
    return this.http.get<any>(this.getSidebarUrl);
  }

}
