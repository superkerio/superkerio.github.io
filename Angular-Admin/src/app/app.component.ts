import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SharedService } from "./common/service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private sharedService: SharedService,
    ) {
    translate.addLangs(["en", "zh"]);
    translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    sharedService.changeEmitted$.subscribe(
      () => {
        this.changeLanguage();
      });
  }
  changeLanguage() {
    console.log("app changeLanguage");
    this.translate.use(this.translate.currentLang === 'en' ? 'zh' : 'en');
  }
}
