// Settings page
const BACK_TO_DASHBOARD_BTN = "#settings_menu_back-to-dashboard";
const PROJECT_SIDEBAR_BTN = "#menu-item-settings-projects";
const REMOVE_LINK_BUTTON = "#settings-projects_remove_action-link";
const REMOVE_CONFIRM_BTN = "#settings-projects_remove-modal_remove-btn";

module.exports = {
  backToDashboardBtn: locate(BACK_TO_DASHBOARD_BTN),

  // PROJECTS SECTION
  projectsSidebarBtn: locate(PROJECT_SIDEBAR_BTN),
  removeLinkBtn: locate(REMOVE_LINK_BUTTON),
  removeConfirmBtn: locate(REMOVE_CONFIRM_BTN),
};
