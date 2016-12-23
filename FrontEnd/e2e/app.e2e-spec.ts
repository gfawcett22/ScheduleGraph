import { ScheduleGraphPage } from './app.po';

describe('schedule-graph App', function() {
  let page: ScheduleGraphPage;

  beforeEach(() => {
    page = new ScheduleGraphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
