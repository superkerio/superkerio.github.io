import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( public translate: TranslateService) {
    translate.addLangs(["en", "zh"]);
    translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
  changeLanguage() {
    console.log("changeLanguage");
    this.translate.use(this.translate.currentLang === 'en' ? 'zh' : 'en');
  }
}
