
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

module.exports = function (dir,name) {
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(chalk.red(
      `The ${name} project already exists in  directory. Please try to use another projectName`
    ));
    process.exit(1);
  }
};
