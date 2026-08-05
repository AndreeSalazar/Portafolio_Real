import type { Handle } from '@sveltejs/kit';

// `<html lang>` tiene que ser correcto en el HTML que se sirve, no ajustado
// despues por JavaScript: los lectores de pantalla y los rastreadores leen el
// documento tal como llega. Esto corre durante el prerender, asi que cada
// pagina estatica sale ya con su idioma escrito.
export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.url.pathname.startsWith('/en') ? 'en' : 'es';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
