import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ueditor',
  templateUrl: './ueditor.component.html',
  styleUrls: ['./ueditor.component.scss']
})
export class UeditorComponent implements OnInit {
  ueditorContent: string = '<p>一些文本吗</p>';
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
