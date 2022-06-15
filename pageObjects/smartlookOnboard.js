// Pages
const CREATE_FREE_ACCOUNT = "#sign-in-redirect-to-sign-up--desktop";
const EMAIL_INPUT = "#sign-up-form--email-input--inner";
const EMAIL_LOGIN_INPUT = "#sign-in-form--email-input--inner";
const PASSWORD_INPUT = "#sign-up-form--password-input--inner";
const PASSWORD_LOGIN_INPUT = "#sign-in-form--password-input--inner";
const POLICY_CHECKBOX = "#sign-up-form--consent-checkbox";
const SUBMIT_CREATE = "#sign-up-form--submit";
const LOGIN_BUTTON = "#sign-in-form--submit";

const WEBSITE_PROJECT = "#init-setup-select-website-project-btn";
const NAME_INPUT = "#init-setup-user-name--inner";
const WHAT_YOU_DO_OTHER_BUTTON = "#init-setup-occupation-other-btn";
const NEXT_BUTTON = "#sign-init-next";
const COMPANY_NAME_INPUT = "#init-setup-business-name--inner";
const BUSINESS_TYPE_BUTTON = "#init-setup-business-size-self-employed-btn";
const SKIP_INVITE_BUTTON = "#invite-team-members_skip-for-now-btn";

module.exports = {
  SMARKLOOK_QA_APP: "https://app.qa.smartlook.cloud/",
  SMARKLOOK_ALFA_APP: "https://app.alfa.smartlook.cloud/",

  createFreeAccountBtn: locate(CREATE_FREE_ACCOUNT),
  createSubmitBtn: locate(SUBMIT_CREATE),
  emailInputsField: locate(EMAIL_INPUT),
  emailLoginInputField: locate(EMAIL_LOGIN_INPUT),
  passwordInputsField: locate(PASSWORD_INPUT),
  passwordLoginInputsField: locate(PASSWORD_LOGIN_INPUT),
  policyCheckbox: locate(POLICY_CHECKBOX),
  loginButton: locate(LOGIN_BUTTON),

  websiteBtn: locate(WEBSITE_PROJECT),
  nameInput: locate(NAME_INPUT),
  whatYouDoBtn: locate(WHAT_YOU_DO_OTHER_BUTTON),
  nextBtn: locate(NEXT_BUTTON),
  companyNameInput: locate(COMPANY_NAME_INPUT),
  selfEmployedBusinessTypeBtn: locate(BUSINESS_TYPE_BUTTON),
  skipInviteBtn: locate(SKIP_INVITE_BUTTON),
};
