import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient} from "@angular/common/http";
@Injectable()
export class TableService {
  private getTableUrl = './assets/mock-data/table.json';
  constructor(
    private http: HttpClient
  ) {}
  getTableData(): Observable<any> {
    return this.http.get<any>(this.getTableUrl);
  }
}
