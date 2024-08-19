# gwjun-ui

A CLI for adding components to your project.

## Installation

Add baseUrl and alias in your `tsconfig.json` to correctly configure the import paths for utility functions.
<br>
<br>
If configured differently, you must input the alias according to the corresponding path when running `init`.

```json
/** tsconfig.json */
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "#*": ["./src/*"]
    }
  }
}
```

> **Note** > <br>
> If you are using other frameworks or build tool such as `Vite`, additional steps may be required to configure `alias`.

## Usage

### init

Use the `init` command to initialize dependencies for a new project.

The `init` command sets up the component-config.json file, which makes configuration settings.

```bash
npx gwjun-ui init
```

### add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx gwjun-ui add [component]
```

#### Example

```bash
npx gwjun-ui add button
```
