import { defineConfig, loadEnv, type PluginOption } from "vite";
import { compression } from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

const env: Record<string, string> = loadEnv("all", import.meta.dirname);

const plugins: PluginOption[] = [];

if (env.MODE === "production") {
  plugins.push(compression());
}

export default defineConfig({
  json: {
    namedExports: true,
  },
  base: "/redux-toolkit/",
  plugins: [...plugins, react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3538,
    host: "127.0.0.1",
  },
});
