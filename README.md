<h1 align="center">GWjun UI</h1>

**Design system that uses the [vanilla-extract](https://github.com/vanilla-extract-css) css library.**
<br>
<br>
You can inject each component codes into your project, like [shadcn-ui](https://github.com/shadcn-ui/ui)

## Installation

Add baseUrl and alias in your `tsconfig.json` to correctly configure the import paths for utility functions.
<br>
<br>
If you configured differently, you must input the alias according to the corresponding path when running `init`.

```json
/** tsconfig.json */
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "#*": ["./src/*"]
    }
  }
}
```

> **Note** <br>
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

## Components

- [Button](https://github.com/GWjun/gwjun-ui/tree/main/src/components/Button)
- [Input](https://github.com/GWjun/gwjun-ui/tree/main/src/components/Input)
- [Label](https://github.com/GWjun/gwjun-ui/tree/main/src/components/Label)
