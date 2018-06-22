import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient} from "@angular/common/http";
@Injectable()
export class FormService {
  private getTreeUrl = './assets/mock-data/tree.json';
  constructor(
    private http: HttpClient
  ) {}
  getTreeData(): Observable<any> {
    return this.http.get<any>(this.getTreeUrl);
  }
}
