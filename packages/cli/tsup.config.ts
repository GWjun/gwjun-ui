import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'esnext',
  clean: true,
  dts: true,
  sourcemap: true,
  minify: true,
  treeshake: true,
});
