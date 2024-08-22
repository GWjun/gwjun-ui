import fs from 'fs-extra';
import path from 'path';
import { getConfig } from './config';

export default async function ReplaceImport(targetDir: string) {
  try {
    const aliasObject = await getConfig('alias');
    if (typeof aliasObject !== 'object' || !('styles' in aliasObject))
      throw new Error('Invalid styles alias');

    const stylesAlias = aliasObject.styles;
    const componentsAlias = aliasObject.components;

    const compareObject = {
      '#styles': stylesAlias,
      '#components': componentsAlias,
    };

    let isEqual = true;
    for (const [key, value] of Object.entries(compareObject)) {
      if (key !== value) {
        isEqual = false;
        break;
      }
    }
    if (isEqual) return;

    const files = await fs.readdir(targetDir);

    for (const file of files) {
      const filePath = path.join(targetDir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await ReplaceImport(filePath);
      } else if (
        stats.isFile() &&
        path.extname(file).match(/\.(js|jsx|ts|tsx)$/)
      ) {
        let content = await fs.readFile(filePath, 'utf-8');

        const importRegex =
          /import\s+(?:[\w\s{},*]+\s+from\s+)?['"]([^'"]+)['"]/g;
        content = content.replace(importRegex, (match, importPath) => {
          for (const keyword of Object.keys(compareObject) as Array<
            keyof typeof compareObject
          >) {
            if (importPath.includes(keyword)) {
              return match.replace(keyword, compareObject[keyword]);
            }
          }
          return match;
        });

        await fs.writeFile(filePath, content, 'utf-8');
      }
    }
  } catch (error) {
    console.error(`Error processing component files: ${error}`);
    process.exit(1);
  }
}
