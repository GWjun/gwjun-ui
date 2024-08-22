import fs from 'fs-extra';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import { appendConfig, setConfig } from '../utils/config';
import fetchFiles from '../utils/fetchFiles';
import getFiles from '../utils/getFiles';

async function initComponent() {
  const componentsPath = await input({
    message: 'Path for components storage from the project root:',
    default: 'src/components',
  });

  try {
    await fs.ensureDir(path.join(process.cwd(), componentsPath));
    await setConfig('componentDir', componentsPath);
  } catch (error) {
    console.error('Error initializing components directory:', error);
    process.exit(1);
  }
}

async function initComponentConfig() {
  const componentsAlias = await input({
    message: 'Alias for components directory from tsconfig.json:',
    default: '#components',
  });

  try {
    await setConfig('alias', { components: componentsAlias });
  } catch (error) {
    console.error('Error initializing components config:', error);
    process.exit(1);
  }
}

async function initStyles() {
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

async function initStylesConfig() {
  const stylesAlias = await input({
    message: 'Alias for styles directory from tsconfig.json:',
    default: '#styles',
  });

  try {
    await appendConfig('alias', { styles: stylesAlias });
    const versionObject = await getFiles({ type: 'version-config.json' });
    await setConfig('version', versionObject.version);
  } catch (error) {
    console.error('Error initializing styles config:', error);
    process.exit(1);
  }
}

export async function init() {
  await initComponent();
  await initComponentConfig();

  await initStyles();
  await initStylesConfig();

  console.log(`Initialized successfully.`);
}
