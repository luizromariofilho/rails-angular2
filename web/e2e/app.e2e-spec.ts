import { RailsAngular2Page } from './app.po';

describe('rails-angular2 App', () => {
  let page: RailsAngular2Page;

  beforeEach(() => {
    page = new RailsAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
