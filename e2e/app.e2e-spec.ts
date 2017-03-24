import { NgTreetablePage } from './app.po';

describe('ng-treetable App', () => {
  let page: NgTreetablePage;

  beforeEach(() => {
    page = new NgTreetablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
