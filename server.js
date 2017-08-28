/* eslint consistent-return:0 */

const logger = require("./logger");

const argv = require("minimist")(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== "production";
const resolve = require("path").resolve;
const app = require("./app");

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || "localhost";

const port = argv.port || process.env.PORT || 3001;

// Start your app.
app.listen(port, host, err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
