Feature("recording");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.waitForText("INTRO");

  // range click
  I.doubleClick(".fa-diamond");
  I.doubleClick(".fa-diamond");
  I.doubleClick(".fa-diamond");

  // open intro tab
  I.wait(3);
  I.click("#introNav");
  I.wait(3);
  I.click(".close");
  I.wait(3);

  // open about tab
  I.waitForElement("#aboutNav");
  I.click("#aboutNav");
  I.wait(3);
  I.click(".close");

  // open contact tab
  I.waitForElement("#contactNav");
  I.click("#contactNav");
  I.wait(3);

  // fill form
  I.fillField("#name", "Name");
  I.fillField("#email", "Email");
  I.fillField("#message", "Message");

  // send message
  I.wait(3);
  I.forceClick(".special");
  I.wait(1);

  // open affiliate nav
  I.waitForElement("#affiliateNav");
  I.click("#affiliateNav");
  I.wait(3);

  // click affiliate link
  I.click("Affiliate with smartlook");
});
