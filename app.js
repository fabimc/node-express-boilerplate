/* eslint consistent-return:0 */

const express = require("express");
const app = express();
const db = require("./db");

db.connect();

const UserController = require("./user/UserController");
app.use("/api/users", UserController);
module.exports = app;
