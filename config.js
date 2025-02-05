require('dotenv').config()
module.exports = {
  DBX_API_DOMAIN: process.env.DBX_API_DOMAIN,
  DBX_OAUTH_DOMAIN: process.env.DBX_OAUTH_DOMAIN,
  DBX_OAUTH_PATH: process.env.DBX_OAUTH_PATH,
  DBX_TOKEN_PATH: process.env.DBX_TOKEN_PATH,
  DBX_APP_KEY: process.env.DBX_APP_KEY,
  DBX_APP_SECRET: process.env.DBX_APP_SECRET,
  OAUTH_REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
  DBX_LIST_FOLDER_PATH: process.env.DBX_LIST_FOLDER_PATH,
  DBX_LIST_FOLDER_CONTINUE_PATH: process.env.DBX_LIST_FOLDER_CONTINUE_PATH,
  DBX_GET_TEMPORARY_LINK_PATH: process.env.DBX_GET_TEMPORARY_LINK_PATH,
  SESSION_ID_SECRET: process.env.SESSION_ID_SECRET,
};
