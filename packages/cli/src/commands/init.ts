import fs from 'fs-extra';
import * as path from 'path';
import { input } from '@inquirer/prompts';
import { execSync } from 'child_process';

import { appendConfig, setConfig } from '../utils/config';
import fetchFiles from '../utils/fetchFiles';
import getFiles from '../utils/getFiles';

async function installVanillaExtract() {
  function detectPackageManager(): string {
    if (fs.existsSync('yarn.lock')) return 'yarn';
    if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
    return 'npm';
  }

  const packageManager = detectPackageManager();
  const installCommand = {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
  }[packageManager];

  console.log(`Detected package manager: ${packageManager}`);
  console.log('Installing vanilla-extract and clsx...');

  try {
    execSync(
      `${installCommand} @vanilla-extract/recipes @vanilla-extract/css clsx`,
      {
        stdio: 'inherit',
      },
    );
    console.log('Vanilla Extract packages installed successfully!');
  } catch (error) {
    console.error('Error installing Vanilla Extract packages:', error);
    process.exit(1);
  }
}

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
  await installVanillaExtract();
  await initComponent();
  await initComponentConfig();

  await initStyles();
  await initStylesConfig();

  console.log(`Initialized successfully.`);
}
