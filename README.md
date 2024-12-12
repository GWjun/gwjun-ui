<h1 align="center">GWjun UI</h1>

**Collection of re-useable components that uses the [vanilla-extract](https://github.com/vanilla-extract-css) css library.**
<br>
<br>
This project is inspired by [shadcn-ui](https://github.com/shadcn-ui/ui) and [radix-ui](https://github.com/radix-ui/primitives).
<br>
You can **inject** each component **codes** into your project, like **shadcn-ui**

You can explore the **Storybook** docs for the deployed components [here](https://6757cbfcde245d5595fbd83a-ycfpsyzsfp.chromatic.com/).

<br>

## Installation

> If you have not set up a React project, please follow the instructions in the [Getting Started Guide](/packages/cli/docs/getting-started-guide.md).
>
> If you have already set up a React project, please proceed with the following steps.

### Add tsconfig alias

Add baseUrl and alias in your `tsconfig.json` to correctly configure the import paths for utility functions.
<br>
<br>
If you configured differently, you must input the alias according to the corresponding path when running `init`.

```json
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

> **Note** <br>
> If you are using other frameworks or build tool such as `Vite`, additional steps may be required to configure `alias`.
>
> Please refer to the documentation in the [Getting Started Guide](/packages/cli/docs/getting-started-guide.md) for detailed instructions.

<br/>

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

<br/>

## Components

- [Avatar](src/components/Avatar)
- [Button](src/components/Button)
- [Input](src/components/Input)
- [Label](src/components/Label)
- [Menu](src/components/Menu)
- [MenuItem](src/components/MenuItem)
- [Modal](src/components/Modal)
- [Skeleton](src/components/Skeleton)
- [Toast](src/components/Toast)

<br/>

## References

This project references code and concepts from [shadcn-ui](https://github.com/shadcn-ui/ui) and [radix-ui](https://github.com/radix-ui/primitives).  
Components are styled using the [vanilla-extract](https://github.com/vanilla-extract-css).

<br/>

## License

Licensed under the MIT License, Copyright (c) 2024 Gwang Jun

See [LICENSE](LICENSE) for more information.
