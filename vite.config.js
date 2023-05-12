import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	publicDir: "public",
	base: "./",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				src: resolve(__dirname, "src/Activision.html"),
				src: resolve(__dirname, "src/BethesdaSoftworks.html"),
				src: resolve(__dirname, "src/ElectronicArts.html"),
				src: resolve(__dirname, "src/MicrosoftGameStudios.html"),
				src: resolve(__dirname, "src/Sega.html"),
				src: resolve(__dirname, "src/SonyComputerEntertainment.html"),
				src: resolve(__dirname, "src/SquareSoft.html"),
				src: resolve(__dirname, "src/Take-TwoInteractive.html"),
				src: resolve(__dirname, "src/Ubisoft.html"),
				src: resolve(__dirname, "src/Nintendo.html"),
			},
		},
	},
});
