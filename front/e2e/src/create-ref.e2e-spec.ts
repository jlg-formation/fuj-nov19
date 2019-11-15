import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Reference } from '../../src/app/interface/reference';
import { FormPage } from './form.po';
import { SuccessPage } from './success.po';


describe('workspace-project App', () => {
  let page: AppPage;
  let formPage: FormPage;
  let successPage: SuccessPage;

  beforeEach(() => {
    page = new AppPage();
    formPage = new FormPage();
    successPage = new SuccessPage();
  });

  it('should create a reference', async () => {
    await page.navigateTo();
    await page.clickOnButtonEnterReference();
    await formPage.fillForm({
      label: 'Marteau',
      category: 'Outils',
      price: 2.34,
      quantity: 5
    } as Reference);
    await formPage.clickOnAddButton();
    expect(successPage.getMessage()).toEqual('Bravo !');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
