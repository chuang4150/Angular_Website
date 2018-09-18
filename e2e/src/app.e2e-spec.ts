import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to angular-bootstrap-example!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to my-app!');
>>>>>>> 58679830ff5e8b8927fc9bd161a27ac1aa98e036
  });
});
