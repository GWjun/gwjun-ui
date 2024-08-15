import fs from 'fs-extra';
import * as path from 'path';
import { getConfig } from '../utils/config';
import { fetchComponent } from '../utils/fetchComponent';

function capitalizeFirstLetter(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export async function add(componentName: string) {
  try {
    componentName = capitalizeFirstLetter(componentName);

    const relativePath = await getConfig('componentDir');
    if (!relativePath) {
      console.error(
        'Component directory not set. Please run "init" command first.'
      );
      return;
    }

    const absolutePath = path.resolve(process.cwd(), relativePath);
    const targetDir = path.join(absolutePath, componentName);

    if (await fs.pathExists(targetDir)) {
      console.error(`Component ${componentName} already exists.`);
      return;
    }

    await fetchComponent(componentName, targetDir);
    console.log(`Component ${componentName} added successfully.`);
  } catch (error) {
    console.error('Error adding component:', error);
  }
}
