import fs from 'fs-extra';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import { setConfig } from '../utils/config';
import fetchFiles from '../utils/fetchFiles';

async function initComponent() {
  const componentPath = await input({
    message: 'Path for component storage from the project root:',
    default: 'src/components',
  });

  try {
    await fs.ensureDir(path.join(process.cwd(), componentPath));
    await setConfig('componentDir', componentPath);
  } catch (error) {
    console.error('Error initializing component directory:', error);
    process.exit(1);
  }
}

async function initStylesFiles() {
  const stylesPath = await input({
    message: 'Path for styles utility storage from the project root:',
    default: 'src/styles',
  });

  try {
    const absoluteStylesPath = path.join(process.cwd(), stylesPath);

    if (fs.existsSync(absoluteStylesPath))
      throw new Error('styles directory already exists.');

    await fetchFiles({
      type: 'styles',
      targetDir: absoluteStylesPath,
    });
  } catch (error) {
    console.error('Error initializing styles directory:', error);
    process.exit(1);
  }
}

async function initStylesAlias() {
  const stylesAlias = await input({
    message: 'Alias for styles directory from tsconfig.json:',
    default: '#styles',
  });

  try {
    await setConfig('alias', { styles: stylesAlias });
  } catch (error) {
    console.error('Error initializing styles alias:', error);
    process.exit(1);
  }
}

export async function init() {
  await initComponent();
  await initStylesFiles();
  await initStylesAlias();

  console.log(`Initialized successfully.`);
}
