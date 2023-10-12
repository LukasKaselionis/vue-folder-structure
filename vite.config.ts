import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

const resolve = (dir: string): string => join(__dirname, dir);

const config: UserConfig = defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve("src")
        },
    },
});

export default config;
