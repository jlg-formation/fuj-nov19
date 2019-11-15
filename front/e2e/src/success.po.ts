import { browser, by, element } from 'protractor';

export class SuccessPage {
  getMessage() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

}
