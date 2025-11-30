import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	build: {
	  outDir: 'dist',
	  emptyOutDir: true,
	  minify: true,
	  watch: {
		include: 'src/**',
		exclude: 'node_modules/**, .git/**, dist/**, .vscode/**',
	  },
	  assetsDir: 'assets',
	  cssCodeSplit: false,
	  sourcemap: false,
	  ssr: false,
	  rollupOptions: {
		treeshake: true,
		output: {
		  entryFileNames: `assets/index.js`,
		  chunkFileNames: `assets/index-chunk.js`,
		  assetFileNames: `assets/[name].[ext]`,
		},
	  },
	},
   
})
