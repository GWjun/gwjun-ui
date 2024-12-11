## Introduction

There are many ways to set up a React project, but in this guide, we will use Vite.

Please note that you can also use other package managers such as `pnpm` or `yarn`.

<br/>

## 1. Create React APP

Use the following command to set up a React boilerplate

```sh
npm create vite@latest my-react-app -- --template react-ts
```

<br/>

## 2. Install Package

Navigate to the project directory and install the necessary packages

```sh
cd my-react-app
```

```sh
npm install
```

<br/>

## 3. Add alias

### 1) Add tsconfig alias

Add baseUrl and alias in your `tsconfig.app.json` to correctly configure the import paths for utility functions.
<br>
<br>
If configured differently, you must input the alias according to the corresponding path when running `init`.

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

### 2) Apply the Alias to Vite

To apply the alias in Vite, follow these additional steps

```sh
npm install -D vite-tsconfig-paths @vanilla-extract/vite-plugin
```

Install the required packages

```ts
// ...
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

// ...
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
});
```

Add `vanillaExtractPlugin` and `tsconfigPaths` to the plugins in your `vite.config.ts`

<br/>
<br/>

## Finish

By following these steps, you will have a React project set up with Vite, along with properly configured aliases for cleaner and more maintainable code.

Feel free to customize the setup further to suit your project requirements. Enjoy Coding!
