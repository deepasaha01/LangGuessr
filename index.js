import { franc, francAll } from "franc";
import pkg from "langs";
const { langs } = pkg;

import pac from "colors";
const { colors } = pac;

const input = process.argv[2];
const langCode = franc(input);
if (langCode === "und") {
  console.log("Sorry, couldn't figure it out! Try with more sample text!".red);
} else {
  const language = pkg.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
