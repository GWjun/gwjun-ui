import fs from 'fs-extra';
import * as path from 'path';
import { getConfig } from '../utils/config';
import fetchFiles from '../utils/fetchFiles';
import ReplaceImport from '../utils/replaceImport';

function capitalizeFirstLetter(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export async function add(componentName: string) {
  try {
    componentName = capitalizeFirstLetter(componentName);

    const relativePath = (await getConfig('componentDir')) as string;
    if (!relativePath) {
      console.error(
        'Component directory not set. Please run "init" command first.',
      );
      return;
    }

    const absolutePath = path.resolve(process.cwd(), relativePath);
    const targetDir = path.join(absolutePath, componentName);

    if (fs.existsSync(targetDir)) {
      console.error(`Component already exists.`);
      return;
    }

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
