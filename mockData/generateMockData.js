import jsf from "json-schema-faker";
import fs from "fs";
import chalk from "chalk";
import { user } from "./schemas/user";

const json = JSON.stringify(jsf(user));

fs.writeFile("mockData/db.json", json, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated"));
  }
});
