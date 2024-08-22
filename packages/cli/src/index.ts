#!/usr/bin/env node
import { program } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

program.version('0.1.7').description('CLI tool for managing components');

program.command('init').description('Initialize the package').action(init);

program
  .command('add <componentName>')
  .description('Add a new component')
  .action(add);

program.parse(process.argv);
