import {
  Component,
  AfterViewInit,
  OnDestroy,
  } from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements AfterViewInit, OnDestroy {
  doc: string = '<p>hello, tinymce</p>';
  constructor() { }

  editor;
  ngAfterViewInit() {
    if (this.editor) {
      return;
    }
    tinymce.init({
      selector: '#post_editor',
      plugins: ['link', 'table'],
      skin_url: 'assets/tinymce/skins/lightgray',
      toolbar1: ' fullscreen insertfile undo redo | styleselect | bold italic | alignleft ' +
      'aligncenter alignright alignjustify | bullist numlist outdent indent | link ',
      toolbar2: 'print preview | forecolor backcolor media ',
      height: "480",
      image_advtab: true,
      menubar: true,
      startContent: "<p>hello</p>",
      setup: editor => {
        this.editor = editor;
        console.log(editor);
        editor.on('keyup change', () => {
          const content = editor.getContent();
          // this.onEditorContentChange.emit(content);
          // console.log("绑定按下事件", content);
        });
      }
    });

  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
