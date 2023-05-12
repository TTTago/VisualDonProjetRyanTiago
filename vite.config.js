import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	publicDir: "public",
	base: "./",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				activision: resolve(__dirname, "src/Activision.html"),
				bethesda: resolve(__dirname, "src/BethesdaSoftworks.html"),
				electronicarts: resolve(__dirname, "src/ElectronicArts.html"),
				microsoft: resolve(__dirname, "src/MicrosoftGameStudios.html"),
				sega: resolve(__dirname, "src/Sega.html"),
				sony: resolve(__dirname, "src/SonyComputerEntertainment.html"),
				squaresoft: resolve(__dirname, "src/SquareSoft.html"),
				ubisoft: resolve(__dirname, "src/Ubisoft.html"),
				nintendo: resolve(__dirname, "src/Nintendo.html"),
				taketwo: resolve(__dirname, "src/Take-TwoInteractive.html"),
			},
		},
	},
});
