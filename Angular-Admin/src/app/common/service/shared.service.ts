import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SharedService {
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  emitChange() {
    this.emitChangeSource.next();
  }
}
