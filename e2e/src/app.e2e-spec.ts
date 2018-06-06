import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('app');
  });

  it('should have aadhar number input tag', () => {
    expect(page.getInputElement()).toBeTruthy();
  });

  it('input tag should have 9999999999', () => {
    page.getInputElement().sendKeys(9999999999);
    expect(page.getInputElement().getAttribute('value')).toBe('9999999999');
  });

  it('should have validate aadhar number button', () => {
    expect(page.getButtonElement()).toBeTruthy();
  });

  it('should validate the aadhar number', () => {
    page.getInputElement().sendKeys(9999999999);
    page.getButtonElement().click();
    browser.wait(() => {
      return browser.isElementPresent(page.getSuccessMesageElement());
    }).then(() => {
      expect(page.getSuccessMesageElement()).toBeTruthy();
    });
  });
});
