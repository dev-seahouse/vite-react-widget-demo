import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": {},
	},
	build: {
		// cssCodeSplit: false,
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, "src/index.tsx"),
			name: "Widget",
			fileName: "widget",
			formats: ["es", "umd"],
		},
	},
});
