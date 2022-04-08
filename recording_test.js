Feature("recording");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.see("INTRO");
  //I.wait(3000);
  I.click("#buttonIntro");
  I.pressKey("Escape");
  I.click("#buttonAffiliate");
  I.pressKey("Escape");
  I.click("#buttonAbout");
  I.pressKey("Escape");
  I.click("#buttonContact");
  I.pressKey("Escape");
  I.wait(10);
  // I.waitForText(locate(""));
  // I.click(locate(""));
  // I.click(locate(".close"));
});
