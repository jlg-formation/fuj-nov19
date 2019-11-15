import { browser, by, element } from 'protractor';
import { Reference } from 'src/app/interface/reference';

export class FormPage {
  async fillForm(reference: Reference ) {
    for (const key of Object.keys(reference)) {
      const input = element(by.css(`input[ng-reflect-name="${key}"]`));
      await input.clear();
      await input.sendKeys(reference[key]);
    }
  }

  async clickOnAddButton() {
    const button = element(by.css('button.primary'));
    await button.click();
  }
}
