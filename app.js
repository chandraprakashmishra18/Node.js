// console.log("Hello , SPIDEY this side big fan of IRON MAN !");
// const citiesname = require('./data/mydata');
// console.log(citiesname);



import chalk from 'chalk';
console.log(chalk.blue('hello spideyyy  bsf of iron man'));

// const chalk = require('chalk');
// console.log(chalk.blue('spideyy alwaays loved iron man'));
// this works only upto v-4.0 of chalk no in v-5.0

const os = require('os');
const userInfo = os.userInfo();
const platform = os.platform();
const architecture = os.architecture();
const uptime = os.uptime();

console.log(userInfo);
console.log(platform);
console.log(architecture);
console.log(uptime);

const fs = require('fs');
fs.writeFileSync('data/data.txt','Hello,World!');
