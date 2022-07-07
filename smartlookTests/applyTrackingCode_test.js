Feature("Apply tracking code");

const {
  I,
  onboarding,
  sidebarMenu,
  projectsDropdown,
  addProjectSidebar,
  settings,
  dashboardPage,
  recordingsPage,
} = inject();

const TEST_EMAIL = "tomas.morkovsky+886494@smartlook.com"; // tomas.morkovsky+886494@smartlook.com
const TEST_PASSWORD = "tomas.morkovsky+886494";
let currentdate = new Date();
const TEST_PROJECT_NAME =
  "Project" +
  currentdate.getDay() +
  currentdate.getMonth() +
  currentdate.getFullYear();
const WIKI_PAGE = "https://en.wikipedia.org/wiki/Reserved_IP_addresses";
const YOUR_QUICK_START_GUIDE_TEXT = "Your quick start guide";

Scenario("Create new account and apply tracking code", async () => {
  I.amOnPage(onboarding.SMARKLOOK_ALFA_APP);

  // Fill email
  I.waitForElement(onboarding.emailLoginInputField);
  I.fillField(onboarding.emailLoginInputField, TEST_EMAIL);
  // Fill password
  I.fillField(onboarding.passwordLoginInputsField, TEST_PASSWORD);
  // Login
  I.forceClick(onboarding.loginButton);
  // Wait for dashboard
  I.waitForText(YOUR_QUICK_START_GUIDE_TEXT);

  // Create new project
  I.click(sidebarMenu.projectsDropdown);
  I.waitForElement(projectsDropdown.addProjectBtn, 60);
  I.click(projectsDropdown.addProjectBtn);

  I.waitForElement(addProjectSidebar.addWebProjectBtn, 60);
  I.fillField(addProjectSidebar.webProjectInput, TEST_PROJECT_NAME);

  I.waitForElement(addProjectSidebar.createProjectBtn, 60);
  I.click(addProjectSidebar.createProjectBtn);

  // WORKAROUND
  I.wait(3);
  I.click("#action-sidebar-close");

  // Wait for project creation
  I.waitForElement(settings.backToDashboardBtn, 60);
  I.wait(3);
  I.click(settings.backToDashboardBtn);

  // Wait for dashboard
  I.waitForText(YOUR_QUICK_START_GUIDE_TEXT);

  // Select correct project
  I.click(sidebarMenu.projectsDropdown);
  I.waitForText(TEST_PROJECT_NAME);
  I.click(`div[alt="${TEST_PROJECT_NAME}"]`);

  // Grab project code
  I.waitForElement(dashboardPage.trackingCode);
  let code = await I.grabTextFrom(dashboardPage.trackingCode);
  // remove <script> tags
  code = code.replace("</script>Copy code", "").replace("<script>", "");

  // Make open wiki page to make recording
  I.openNewTab();
  I.amOnPage(WIKI_PAGE);

  I.executeScript(code);

  // Make actions on wiki page to create recording
  I.wait(2);
  I.click('a[href="#IPv4"]');
  I.wait(2);
  I.scrollPageToTop();
  I.wait(2);
  I.click('a[href="#IPv6"]');
  I.wait(2);
  I.scrollPageToBottom();
  // close wiki page
  I.closeCurrentTab();

  // Refresh smartlook dashboard and check that tracking code disappears
  I.refreshPage();
  I.waitForInvisible(dashboardPage.trackingCode);

  // Switch to recording page
  I.click(sidebarMenu.recordingsPage);
  // Wait for recording page
  I.waitForElement(recordingsPage.addFilterBtn);

  // Open active sessions
  I.click('[data-cy="Activesessions_list-item"]');
  I.wait(1);

  // Check active recording
  I.waitForElement(recordingsPage.playIcon);
  I.waitForText("Now recording");
  I.waitForElement(recordingsPage.recordingInfoPanel);

  // Navigate to project page
  I.click(sidebarMenu.upgradeButton);
  I.waitForElement(settings.projectsSidebarBtn);
  I.click(settings.projectsSidebarBtn);

  // Select current project
  I.waitForElement(`[data-cy="${TEST_PROJECT_NAME}_Custom–Admin"]`);
  I.click(`[data-cy="${TEST_PROJECT_NAME}_Custom–Admin"]`);

  // Remove current project
  I.waitForElement(settings.removeLinkBtn);
  I.scrollTo(settings.removeLinkBtn);
  I.click(settings.removeLinkBtn);

  // confirm removal
  I.waitForElement(settings.removeConfirmBtn);
  I.click(settings.removeConfirmBtn);

  // wait for project removel
  I.waitForInvisible(`[data-cy="${TEST_PROJECT_NAME}_Custom–Admin"]`);
});
