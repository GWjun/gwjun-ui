import fs from 'fs-extra';
import * as path from 'path';

const CONFIG_FILE = path.join(process.cwd(), 'component-config.json');

type ConfigValue = string | { [key: string]: string };

interface Config {
  [key: string]: ConfigValue;
}

export async function getConfig(key: string): Promise<ConfigValue | undefined> {
  if (await fs.pathExists(CONFIG_FILE)) {
    const config: Config = await fs.readJson(CONFIG_FILE);
    return config[key];
  }
  return undefined;
}

export async function setConfig(
  key: string,
  value: ConfigValue,
): Promise<void> {
  let config: Config = {};
  if (await fs.pathExists(CONFIG_FILE)) {
    config = await fs.readJson(CONFIG_FILE);
  }
  config[key] = value;
  await fs.writeJson(CONFIG_FILE, config, { spaces: 2 });
}

export async function appendConfig(
  key: string,
  value: { [subKey: string]: string },
): Promise<void> {
  let config: Config = {};

  if (await fs.pathExists(CONFIG_FILE)) {
    config = await fs.readJson(CONFIG_FILE);

    if (key in config && typeof config[key] === 'object') {
      const existingValue = config[key] as { [key: string]: string };
      config[key] = { ...existingValue, ...value };
    } else {
      config[key] = value;
    }
  } else {
    config[key] = value;
  }

  await fs.writeJson(CONFIG_FILE, config, { spaces: 2 });
}
