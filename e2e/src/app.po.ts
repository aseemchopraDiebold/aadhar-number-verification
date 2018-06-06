import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getInputElement() {
    return element(by.css('app-root .aadhar-card-input'));
  }

  getButtonElement() {
    return element(by.css('app-root button'));
  }

  getSuccessMesageElement() {
    return element(by.css('app-root .aadhar-number-match-success'));
  }
}
