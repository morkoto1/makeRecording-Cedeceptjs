/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type webpage = typeof import('./pageObjects/stunningWebpage.js');
type onboarding = typeof import('./pageObjects/smartlookOnboard.js');
type sidebarMenu = typeof import('./pageObjects/sidebarMenu.js');
type settings = typeof import('./pageObjects/settings.js');
type dashboardPage = typeof import('./pageObjects/dashboardPage.js');
type recordingsPage = typeof import('./pageObjects/recordingsPage.js');
type projectsDropdown = typeof import('./fragments/projectsDropdown.js');
type addProjectSidebar = typeof import('./fragments/addProjectSidebar.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, webpage: webpage, onboarding: onboarding, sidebarMenu: sidebarMenu, settings: settings, dashboardPage: dashboardPage, recordingsPage: recordingsPage, projectsDropdown: projectsDropdown, addProjectSidebar: addProjectSidebar }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
