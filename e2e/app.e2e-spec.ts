import { ShankarguravGithubIoPage } from './app.po';

describe('shankargurav-github-io App', function() {
  let page: ShankarguravGithubIoPage;

  beforeEach(() => {
    page = new ShankarguravGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
