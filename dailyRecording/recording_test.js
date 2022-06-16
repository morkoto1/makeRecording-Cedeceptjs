Feature("Make Recording");

const { I, webpage } = inject();

Scenario("make actions on page stunning-test-website.tech", () => {
  I.amOnPage("/");
  I.waitForText("INTRO");
  I.moveCursorTo(webpage.diamondIcon);

  // open popup (custom event)
  I.wait(3);
  I.click(webpage.diamondIcon);
  I.wait(3);

  // Click on popup (close it)
  I.waitForElement(webpage.popup);
  I.click(webpage.popup);

  // open intro tab
  I.moveCursorTo(webpage.introPage);
  I.wait(3);
  I.click(webpage.introPage);
  I.wait(3);
  I.moveCursorTo(webpage.closeIcon);
  I.click(webpage.closeIcon);
  I.wait(3);

  // open about tab
  I.waitForElement(webpage.aboutPage);
  I.moveCursorTo(webpage.aboutPage);
  I.click(webpage.aboutPage);
  I.wait(3);
  I.click(webpage.closeIcon);

  // open contact tab
  I.waitForElement(webpage.contactPage);
  I.moveCursorTo(webpage.contactPage);
  I.click(webpage.contactPage);
  I.wait(3);

  // fill form
  I.fillField(webpage.nameInput, "Name");
  I.fillField(webpage.emailInput, "Email");
  I.fillField(webpage.messageInput, "Message");

  // send message
  I.wait(3);
  I.click(webpage.closeIcon);
  I.wait(1);

  // open affiliate nav
  I.waitForElement(webpage.affiliatePage);
  I.moveCursorTo(webpage.affiliatePage);
  I.click(webpage.affiliatePage);
  I.wait(3);

  // click affiliate link
  I.click("Affiliate with smartlook");
  I.wait(3);
});
