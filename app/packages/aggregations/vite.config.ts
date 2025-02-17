import { UserConfig } from "vite";

export default <UserConfig>{
  esbuild: true,
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    target: "es2015",
    minify: false,
  }
};
