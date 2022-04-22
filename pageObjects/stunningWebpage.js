const DIAMOND_ICON = ".fa-diamond";
const POPUP = "#myPopup";
const CLOSE_ICON = ".close";

// Pages
const INTRO_PAGE = "#introNav";
const ABOUT_PAGE = "#aboutNav";
const AFFILIATE_PAGE = "#affiliateNav";
const CONTACT_PAGE = "#contactNav";

// contact page inputs
const EMAIL_INPUT = "#email";
const NAME_INPUT = "#name";
const MESSAGE_INPUT = "#message";

module.exports = {
  diamondIcon: locate(DIAMOND_ICON),
  popup: locate(POPUP),
  closeIcon: locate(CLOSE_ICON),

  introPage: locate(INTRO_PAGE),
  aboutPage: locate(ABOUT_PAGE),
  affiliatePage: locate(AFFILIATE_PAGE),
  contactPage: locate(CONTACT_PAGE),

  emailInput: locate(EMAIL_INPUT),
  nameInput: locate(NAME_INPUT),
  messageInput: locate(MESSAGE_INPUT),
};
