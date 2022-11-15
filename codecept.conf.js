const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: "./*/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://stunning-test-website.tech",
      show: true,
      browser: "webkit",
      windowSize: "1920x1080",
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForNavigation: "networkidle",
      timeout: 60000,
      waitForTimeout: 60000,
      waitForTimeout: 60000,
      waitForAction: 500, // Delay (ms) after click
    },
  },
  include: {
    I: "./steps_file.js",

    // Test web page
    webpage: "./pageObjects/stunningWebpage.js",

    // Smartlook page objects
    onboarding: "./pageObjects/smartlookOnboard.js",
    sidebarMenu: "./pageObjects/sidebarMenu.js",
    settings: "./pageObjects/settings.js",
    dashboardPage: "./pageObjects/dashboardPage.js",
    recordingsPage: "./pageObjects/recordingsPage.js",

    // Smartlook page fragments
    projectsDropdown: "./fragments/projectsDropdown.js",
    addProjectSidebar: "./fragments/addProjectSidebar.js",
  },
  bootstrap: null,
  mocha: {},
  name: "makeRecording",
};
