#!/usr/bin/env node

const commander = require('commander');

const program = new commander.Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-h, --help', 'output usage information')
  .parse(process.argv);

if (program.help) {
    program.outputHelp();
}
