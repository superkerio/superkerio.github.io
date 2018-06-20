import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ueditor',
  templateUrl: './ueditor.component.html',
  styleUrls: ['./ueditor.component.scss']
})
export class UeditorComponent implements OnInit {
  ueditorContent: string = '<p>一些文本</p>';
  ueditorConfig = {
    autoHeightEnabled: true,
    autoFloatEnabled: true,
    autosave: false,
    initialFrameHeight: 400,
    // 默认前端配置项
    options: {
      UEDITOR_HOME_URL: (location.href.indexOf('github') !== -1 ? '/Angular-Admin/dist' : '.') + '/assets/ueditor/',
    }
  };
  constructor() { }

  ngOnInit() {
  }
}
