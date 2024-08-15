import * as fs from 'fs-extra';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import { setConfig } from '../utils/config';

export async function init(inputPath?: string) {
  let relativePath: string;

  if (!inputPath) {
    relativePath = await input({
      message: 'Path for component storage from the project root:',
      default: './components',
    });
  } else {
    relativePath = inputPath;
  }

  const absolutePath = path.resolve(process.cwd(), relativePath);

  try {
    await fs.ensureDir(absolutePath);
    await setConfig('componentDir', relativePath);
    console.log(`Component directory initialized at: ${absolutePath}`);
  } catch (error) {
    console.error('Error initializing component directory:', error);
  }
}
