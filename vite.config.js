import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";    
import path from "path";

export default defineConfig ({
    base: process.env.NODE_ENV === "production" ? "/f8-fullstack-module-1" : "/",
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                // ...
            }
        }
    },

    plugins: [ViteEjsPlugin()],
});