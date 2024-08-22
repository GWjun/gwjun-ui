import fs from 'fs-extra';
import * as path from 'path';
import { getConfig } from '../utils/config';
import fetchFiles from '../utils/fetchFiles';
import ReplaceImport from '../utils/replaceImport';
import getFiles from '../utils/getFiles';

function capitalizeFirstLetter(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

async function validateComponent(componentName: string) {
  const localStylesVersion = (
    (await getConfig('version')) as {
      [key: string]: string;
    }
  ).styles;
  const recentStylesVersion = (await getFiles({ type: 'version-config.json' }))
    .version.styles;

  if (localStylesVersion !== recentStylesVersion) {
    console.error(
      'The versions of the styles utility are different.Please backup your current styles directory, delete it and init again',
    );
    return null;
  }

  const relativePath = (await getConfig('componentDir')) as string;
  if (!relativePath) {
    console.error(
      'Component directory not set. Please run "init" command first.',
    );
    return null;
  }

  const absolutePath = path.resolve(process.cwd(), relativePath);
  const targetDir = path.join(absolutePath, componentName);

  if (fs.existsSync(targetDir)) {
    console.error(`Component already exists.`);
    return null;
  }

  return targetDir;
}

export async function add(componentName: string) {
  try {
    componentName = capitalizeFirstLetter(componentName);
    const targetDir = await validateComponent(componentName);
    if (!targetDir) return;

    await fetchFiles({
      type: 'components',
      content: componentName,
      targetDir,
    });

    await ReplaceImport(targetDir);

    console.log(`Component ${componentName} added successfully.`);
  } catch (error) {
    console.error('Error adding component:', error);
  }
}
