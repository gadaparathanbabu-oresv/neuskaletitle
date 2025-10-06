import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    // Development server configuration
    server: {
        host: "::",   // allows access from local network and IPv6
        port: 8080,   // custom port
    },

    // Plugins
    plugins: [
        react(),                            // React with SWC support
        mode === "development" && componentTagger(), // run only in dev mode
    ].filter(Boolean), // remove false values

    // Path aliases
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // '@' points to 'src'
        },
    },
}));
