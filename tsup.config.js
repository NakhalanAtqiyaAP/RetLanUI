import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.js"], // entry utama library
  format: ["esm", "cjs"], // hasil output ganda
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"], // ⬅️ penting agar React tidak ikut ter-bundle
  loader: { ".js": "jsx" }, // supaya JSX bisa diproses
  splitting: false,
  dts: false,
  minify: false,
});
