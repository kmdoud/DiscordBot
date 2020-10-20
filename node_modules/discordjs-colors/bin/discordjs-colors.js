#!/usr/bin/env node

const chalk = require("chalk");

let random = "#"+(0x1000000+(Math.random())*0xFFFFFF).toString(16).substring(1,7).toUpperCase();

let defaultColor = `DEFAULT: ${chalk.hex("#000000")("#000000")}`;
let white = `WHITE: ${chalk.hex("#FFFFFF")("#FFFFFF")}`;
let aqua = `AQUA: ${chalk.hex("#1ABC9C")("#1ABC9C")}`;
let green = `GREEN: ${chalk.hex("#2ECC71")("#2ECC71")}`;
let blue = `BLUE: ${chalk.hex("#3498DB")("#3498DB")}`;
let purple = `PURPLE: ${chalk.hex("#9B59B6")("#9B59B6")}`;
let luminousvividpink = `LUMINOUS_VIVID_PINK: ${chalk.hex("#E91E63")("#E91E63")}`;
let gold = `GOLD: ${chalk.hex("#F1C40F")("#F1C40F")}`;
let orange = `ORANGE: ${chalk.hex("#E67E22")("#E67E22")}`;
let red = `RED: ${chalk.hex("#E74C3C")("#E74C3C")}`;
let gray = `GREY: ${chalk.hex("#95A5A6")("#95A5A6")}`;
let navy = `NAVY: ${chalk.hex("#34495E")("#34495E")}`;
let darkaqua = `DARK_AQUA: ${chalk.hex("#11806A")("#11806A")}`;
let darkgreen = `DARK_GREEN: ${chalk.hex("#1F8B4C")("#1F8B4C")}`;
let darkblue = `DARK_BLUE: ${chalk.hex("#206694")("#206694")}`;
let darkpurple = `DARK_PURPLE: ${chalk.hex("#71368A")("#71368A")}`;
let darkvividpink = `DARK_VIVID_PINK: ${chalk.hex("#AD1457")("#AD1457")}`;
let darkgold = `DARK_GOLD: ${chalk.hex("#C27C0E")("#C27C0E")}`;
let darkorange = `DARK_ORANGE: ${chalk.hex("#A84300")("#A84300")}`;
let darkred = `DARK_RED: ${chalk.hex("#992D22")("#992D22")}`;
let darkgray = `DARK_GREY: ${chalk.hex("#979C9F")("#979C9F")}`;
let darkergray = `DARKER_GREY: ${chalk.hex("#7F8C8D")("#7F8C8D")}`;
let lightgray = `LIGHT_GRAY: ${chalk.hex("#BCC0C0")("#BCC0C0")}`;
let darknavy = `DARK_NAVY: ${chalk.hex("#2C3E50")("#2C3E50")}`;
let blurple = `BLURPLE: ${chalk.hex("#7289DA")("#7289DA")}`;
let grayple = `GREYPLE: ${chalk.hex("#99AAB5")("#99AAB5")}`;
let darkbutnotblack = `DARK_BUT_NOT_BLACK: ${chalk.hex("#2C2F33")("#2C2F33")}`;
let notquiteblack = `NOT_QUITE_BLACK: ${chalk.hex("#23272A")("#23272A")}`;
let randomColor = `RANDOM: ${chalk.hex(random)(random)}`;

console.log(`${defaultColor}\n${white}\n${aqua}\n${green}\n${blue}\n${purple}\n${luminousvividpink}\n${gold}\n${orange}\n${red}\n${gray}\n${navy}\n${darkaqua}\n${darkgreen}\n${darkblue}\n${darkpurple}\n${darkvividpink}\n${darkgold}\n${darkorange}\n${darkred}\n${darkgray}\n${darkergray}\n${lightgray}\n${darknavy}\n${blurple}\n${grayple}\n${darkbutnotblack}\n${notquiteblack}\n${randomColor}`);