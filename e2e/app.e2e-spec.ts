import { ExpiviPage } from './app.po';

describe('expivi App', () => {
  let page: ExpiviPage;

  beforeEach(() => {
    page = new ExpiviPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
