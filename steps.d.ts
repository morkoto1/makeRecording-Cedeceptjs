/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type webpage = typeof import('./pageObjects/stunningWebpage.js');
type onboarding = typeof import('./pageObjects/smartlookOnboard.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, webpage: webpage, onboarding: onboarding }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
