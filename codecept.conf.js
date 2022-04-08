const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://stunning-test-website.tech",
      show: false,
      browser: "chromium",
      windowSize: "1920x1080",
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForNavigation: "networkidle",
      waitForTimeout: 60000,
      waitForAction: 500, // Delay (ms) after click
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "makeRecording",
};
