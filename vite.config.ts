import { defineConfig, loadEnv, type PluginOption } from "vite";
import { compression } from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

const env = loadEnv("all", process.cwd(), "VITE_");

const plugins: PluginOption[] = [];

if (env.MODE === "production") {
  plugins.push(compression());
}

export default defineConfig({
  json: {
    namedExports: true,
  },
  base: env.VITE_BASE_URL,
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
