import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core-function/service/language.service';


@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {
  isMenuVisible: boolean;
  systemLang: string;
  constructor(private languageService: LanguageService,
    private translateService: TranslateService) {
  }

  async ngOnInit(): Promise<void> {
    this.isMenuVisible = true;
    this.translateService.use(localStorage.getItem('lang') || navigator.language);

    localStorage.setItem('lang', localStorage.getItem('lang') || navigator.language);
    if (localStorage.getItem('lang') == null) {
      this.translateService.use('zh-TW');
    }
    this.systemLang = localStorage.getItem('lang');
  }
  changeLanguage(event:any) {
    if (localStorage.getItem('lang') == 'zh-TW') {
      this.translateService.use('en-Us');
      localStorage.setItem('lang','en-Us');
    } else {
      this.translateService.use('zh-TW');
      localStorage.setItem('lang','zh-TW');
    }
    this.systemLang = localStorage.getItem('lang');

  }

}
