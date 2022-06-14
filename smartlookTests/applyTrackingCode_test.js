Feature("Apply tracking cod");

const { I, onboarding } = inject();

const TEST_EMAIL = "tomas.morkovsky+886494@smartlook.com"; // tomas.morkovsky+886494@smartlook.com
const TEST_PASSWORD = "tomas.morkovsky+886494";
let currentdate = new Date();
const TEST_PROJECT_NAME =
  "Project" +
  currentdate.getDay() +
  currentdate.getMonth() +
  currentdate.getFullYear();

Scenario("Create new account and apply tracking code", async () => {
  I.amOnPage(onboarding.SMARKLOOK_ALFA_APP);

  // Fill email
  I.waitForElement("#sign-in-form--email-input--inner");
  I.fillField("#sign-in-form--email-input--inner", TEST_EMAIL);
  // Fill password
  I.fillField("#sign-in-form--password-input--inner", TEST_PASSWORD);
  // Login
  I.forceClick("#sign-in-form--submit");
  // Wait for dashboard
  I.waitForText("Your quick start guide");

  // Create new project
  I.click("#app-menu_projects-menu-btn");
  I.waitForElement("#organizations_main-sidebar_add-btn", 60);
  I.click("#organizations_main-sidebar_add-btn");

  I.waitForElement("#settings-projects_add-sidebar_website-btn", 60);
  I.fillField(
    "#settings-projects_add-sidebar_name-input--inner",
    TEST_PROJECT_NAME
  );

  I.waitForElement("#settings-projects_add-sidebar_create-btn", 60);
  I.click("#settings-projects_add-sidebar_create-btn");

  // wait for project creation
  I.waitForElement("#settings_menu_back-to-dashboard", 60);
  I.wait(3);
  I.forceClick("#settings_menu_back-to-dashboard");

  // Wait for dashboard
  I.waitForText("Your quick start guide");

  // select correct project
  I.click("#app-menu_projects-menu-btn");
  I.waitForText(TEST_PROJECT_NAME);
  I.click(`div[alt="${TEST_PROJECT_NAME}"]`);

  // grab project code
  let code = await I.grabTextFrom("#website-code__code");
  code = code.replace("</script>Copy code", "").replace("<script>", "");

  // Make open wiki page to make recording
  I.openNewTab();
  I.amOnPage("https://en.wikipedia.org/wiki/Reserved_IP_addresses");

  I.executeScript(code);

  // Make actions
  I.wait(2);
  I.click('a[href="#IPv4"]');
  I.wait(2);
  I.scrollPageToTop();
  I.wait(2);
  I.click('a[href="#IPv6"]');
  I.wait(2);
  I.scrollPageToBottom();

  I.closeCurrentTab();

  I.refreshPage();

  I.waitForInvisible("#website-code__code");

  I.click("#app-recordings");
  // wait for recording page
  I.waitForElement("#app-recordings_main-sidebar_add-edit-filter-segment-btn");

  // open active sessions
  I.click('[data-cy="Activesessions_list-item"]');
  I.wait(1);

  // check active recording
  I.waitForElement(".recording-play-icon");
  I.waitForText("Now recording");
  I.waitForElement(".recording-session-info");

  // Remove current project
  I.click("#app_menu_upgrade");

  I.waitForElement("#menu-item-settings-projects");
  I.click("#menu-item-settings-projects");

  I.waitForElement(`[data-cy="${TEST_PROJECT_NAME}_Trial–Admin"]`);
  I.click(`[data-cy="${TEST_PROJECT_NAME}_Trial–Admin"]`);

  I.waitForElement("#settings-projects_remove_action-link");
  I.scrollTo("#settings-projects_remove_action-link");
  I.click("#settings-projects_remove_action-link");

  I.waitForElement("#settings-projects_remove-modal_remove-btn");
  I.click("#settings-projects_remove-modal_remove-btn");

  I.waitForInvisible(`[data-cy="${TEST_PROJECT_NAME}_Trial–Admin"]`);
});
