Feature("recording");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.waitForText("INTRO");
  I.moveCursorTo(".fa-diamond");

  // range click
  I.wait(3);
  I.doubleClick(".fa-diamond");
  I.doubleClick(".fa-diamond");
  I.doubleClick(".fa-diamond");

  // open intro tab
  I.moveCursorTo("#introNav");
  I.wait(3);
  I.click("#introNav");
  I.wait(3);
  I.moveCursorTo(".close");
  I.click(".close");
  I.wait(3);

  // open about tab
  I.waitForElement("#aboutNav");
  I.moveCursorTo("#aboutNav");
  I.click("#aboutNav");
  I.wait(3);
  I.click(".close");

  // open contact tab
  I.waitForElement("#contactNav");
  I.moveCursorTo("#contactNav");
  I.click("#contactNav");
  I.wait(3);

  // fill form
  I.fillField("#name", "Name");
  I.fillField("#email", "Email");
  I.fillField("#message", "Message");

  // send message
  I.wait(3);
  I.click(".close");
  I.wait(1);

  // open affiliate nav
  I.waitForElement("#affiliateNav");
  I.moveCursorTo("#affiliateNav");
  I.click("#affiliateNav");
  I.wait(3);

  // click affiliate link
  I.click("Affiliate with smartlook");
  I.wait(3);
});
