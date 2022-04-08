Feature('recording');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://stunning-test-website.tech/');
  I.wait(1000)
  I.click('#introNav')
  I.wait(10000)
  I.click('.close')
  I.wait(10000)
});
