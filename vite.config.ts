import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// El sitio es una sola pagina sin nada de servidor: adapter-static lo
			// prerenderiza a HTML plano y Vercel lo sirve desde su CDN. Sin funciones
			// serverless que arrancar, sin sorpresas de deteccion de entorno.
			adapter: adapter({
				fallback: '404.html'
			})
		})
	]
});
