import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ueditor',
  templateUrl: './ueditor.component.html',
  styleUrls: ['./ueditor.component.scss']
})
export class UeditorComponent implements OnInit {
  params = <any>{};
  ueditorConfig = {
    autoHeightEnabled: true,
    autoFloatEnabled: true,
    autosave: false,
    initialFrameHeight: 400,
  };
  constructor() { }

  ngOnInit() {
  }
}
