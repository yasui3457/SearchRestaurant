import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'レストラン検索アプリ';

  /** ngIfによる画面遷移 */
  /** 
  HOT_PEPPER_NUM: number = 1;
  GURUNABI_NUM: number = 2;
  selectedComponentNum: number = this.HOT_PEPPER_NUM;

  clickHotPepper() {
    this.selectedComponentNum = this.HOT_PEPPER_NUM;
  }

  clickGurunabi() {
    this.selectedComponentNum = this.GURUNABI_NUM;
  }
  */

}
