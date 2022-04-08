Feature("recording");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.waitForText("INTRO");
  I.wait(3);
  I.click("#buttonIntro");
  I.wait(3);
  I.click(".close");
  I.wait(3);

  I.waitForElement("#buttonAffiliate");
  I.click("#buttonAffiliate");
  I.wait(3);
  I.click(".close");

  I.waitForElement("#buttonAbout");
  I.click("#buttonAbout");
  I.wait(3);
  I.click(".close");

  I.waitForElement("#buttonContact");
  I.click("#buttonContact");
  I.wait(3);
  I.click(".close");
  I.wait(1);
});
