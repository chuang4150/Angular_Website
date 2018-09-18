import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
<<<<<<< HEAD
    return element(by.css('abe-root h1')).getText();
=======
    return element(by.css('app-root h1')).getText();
>>>>>>> 58679830ff5e8b8927fc9bd161a27ac1aa98e036
  }
}
