import { MiscelaneousPage } from './app.po';

describe('miscelaneous App', () => {
  let page: MiscelaneousPage;

  beforeEach(() => {
    page = new MiscelaneousPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
