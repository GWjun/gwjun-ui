#!/usr/bin/env node
import { program } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

program.version('0.1.0').description('CLI tool for managing components');

program
  .command('init [path]')
  .description('Initialize the component storage location')
  .action(init);

program
  .command('add <componentName>')
  .description('Add a new component')
  .action(add);

program.parse(process.argv);
