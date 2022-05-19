Feature("Apply tracking cod");

const { I, onboarding } = inject();

const TEST_EMAIL = "test976563365490@test.cz";
const TEST_PASSWORD = "test976563365490";
const TEST_PROJECT_NAME = "helo";

Scenario.skip("Create new account", () => {
  I.amOnPage(onboarding.SMARKLOOK_QA_APP);

  // Create new account
  I.waitForElement(onboarding.createFreeAccountBtn, 60);
  I.click(onboarding.createFreeAccountBtn);

  // Fill email
  I.fillField(onboarding.emailInputsField, TEST_EMAIL);
  // Fill password
  I.fillField(onboarding.passwordInputsField, TEST_PASSWORD);
  // Accept terms and conditions
  I.forceClick(onboarding.policyCheckbox);
  I.wait(1);
  // Create / submit
  I.click(onboarding.createSubmitBtn);

  // Define project
  I.waitForElement(onboarding.websiteBtn, 60);
  I.click(onboarding.websiteBtn);

  // Fill name
  I.waitForElement(onboarding.nameInput, 60);
  I.fillField(onboarding.nameInput, TEST_PROJECT_NAME);
  I.click(onboarding.whatYouDoBtn);

  // Click next
  I.click(onboarding.nextBtn);

  // Fill company name
  I.waitForElement(onboarding.companyNameInput, 60);
  I.fillField(onboarding.companyNameInput, TEST_PROJECT_NAME);
  I.click(onboarding.selfEmployedBusinessTypeBtn);

  // Click next
  I.click(onboarding.nextBtn);
  I.wait(1);
  I.click(onboarding.nextBtn);
  I.waitForElement(onboarding.skipInviteBtn, 60);
  I.click(onboarding.skipInviteBtn);

  I.wait(888);
});

Scenario.skip("Get and apply tracking code", () => {});
