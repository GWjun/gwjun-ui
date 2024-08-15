import fs from 'fs-extra';
import * as path from 'path';

const GITHUB_REPO =
  'https://api.github.com/repos/GWjun/gwjun-ui/contents/src/components';

export async function fetchComponent(componentName: string, targetDir: string) {
  const response = await fetch(`${GITHUB_REPO}/${componentName}`);
  if (response.status === 404) {
    throw new Error(`Component ${componentName} not found.`);
  }
  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  if (data.length === 0) {
    throw new Error(`Component ${componentName} is empty or not found.`);
  }

  await fs.ensureDir(targetDir);
  for (const file of data) {
    if (file.type !== 'file') {
      console.warn(`Skipping non-file item: ${file.name}`);
      continue;
    }

    const fileResponse = await fetch(file.download_url);
    if (!fileResponse.ok) throw new Error('Network response was not ok');

    const fileBuffer = Buffer.from(await fileResponse.arrayBuffer());
    const filePath = path.join(targetDir, file.name);

    await fs.writeFile(filePath, fileBuffer);
  }
}
