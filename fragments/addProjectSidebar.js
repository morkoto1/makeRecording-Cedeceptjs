// Add oraganization/project sidebar
const ADD_WEB_PROJECT_BTN = "#settings-projects_add-sidebar_website-btn";
const NAME_INPUT = "#settings-projects_add-sidebar_name-input--inner";
const CREATE_BTN = "#settings-projects_add-sidebar_create-btn";

module.exports = {
  addWebProjectBtn: locate(ADD_WEB_PROJECT_BTN),
  webProjectInput: locate(NAME_INPUT),
  createProjectBtn: locate(CREATE_BTN),
};
