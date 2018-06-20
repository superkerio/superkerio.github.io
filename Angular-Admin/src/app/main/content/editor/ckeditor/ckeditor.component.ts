import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  ckeditorContent: string = '<p>Some html</p>';
  constructor() { }

  ngOnInit() {
  }

}
