import { WeatherPage } from './app.po';

describe('weather App', function() {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('weather Works!');
  });
});
