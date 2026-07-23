<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let ready = $state(false);

	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<title>Salazar — Portafolio</title>
	<meta
		name="description"
		content="Portafolio personal — desarrollo y diseño con estética de arte tradicional chino."
	/>
</svelte:head>

{#if ready}
	<main class="relative min-h-screen overflow-hidden bg-arroz font-serifcn text-tinta">
		<!-- Barra superior -->
		<header
			in:fade={{ duration: 800 }}
			class="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-6 md:px-14"
		>
			<div class="flex items-center gap-3">
				<span
					class="grid size-9 place-items-center rounded-sm bg-cinabrio text-sm font-bold text-arroz shadow-md"
					>萨</span
				>
				<span class="font-sanscn text-xs tracking-[0.35em] uppercase">Salazar</span>
			</div>
			<nav class="hidden gap-10 font-sanscn text-xs tracking-[0.25em] uppercase md:flex">
				<a href="#proyectos" class="transition-colors hover:text-cinabrio">Proyectos</a>
				<a href="#sobre-mi" class="transition-colors hover:text-cinabrio">Sobre mí</a>
				<a href="#contacto" class="transition-colors hover:text-cinabrio">Contacto</a>
			</nav>
		</header>

		<!-- Texto vertical decorativo -->
		<p
			in:fade={{ duration: 1200, delay: 900 }}
			class="absolute top-1/2 left-6 hidden -translate-y-1/2 text-lg tracking-[0.6em] text-tinta/40 select-none lg:block"
			style="writing-mode: vertical-rl"
		>
			大道至简
		</p>
		<p
			in:fade={{ duration: 1200, delay: 900 }}
			class="absolute top-1/2 right-6 hidden -translate-y-1/2 text-lg tracking-[0.6em] text-tinta/40 select-none lg:block"
			style="writing-mode: vertical-rl"
		>
			少即是多
		</p>

		<!-- Contenido central -->
		<section
			class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
		>
			<!-- Sello (印章) -->
			<div
				in:fly={{ y: 20, duration: 700 }}
				class="seal mb-10 grid size-20 place-items-center rounded-lg bg-cinabrio shadow-xl"
			>
				<span class="text-4xl font-black text-arroz">萨</span>
			</div>

			<p
				in:fly={{ y: 20, duration: 700, delay: 150 }}
				class="mb-4 font-sanscn text-xs tracking-[0.5em] text-tinta-suave uppercase"
			>
				Desarrollador · Diseñador
			</p>

			<h1
				in:fly={{ y: 24, duration: 800, delay: 300 }}
				class="text-6xl font-black tracking-[0.12em] md:text-8xl"
			>
				SALAZAR
			</h1>

			<!-- Divisor dorado -->
			<div in:fade={{ duration: 800, delay: 550 }} class="my-8 flex items-center gap-3">
				<span class="h-px w-16 bg-dorado md:w-24"></span>
				<span class="size-1.5 rotate-45 bg-dorado"></span>
				<span class="h-px w-16 bg-dorado md:w-24"></span>
			</div>

			<p
				in:fly={{ y: 20, duration: 700, delay: 650 }}
				class="max-w-xl text-base leading-relaxed text-tinta-suave md:text-lg"
			>
				Creo experiencias digitales donde la precisión del código encuentra la calma de la
				tinta y el papel.
			</p>

			<div
				in:fly={{ y: 20, duration: 700, delay: 800 }}
				class="mt-10 flex flex-col gap-4 sm:flex-row"
			>
				<a
					href="#proyectos"
					class="rounded-sm bg-cinabrio px-8 py-3 font-sanscn text-sm tracking-[0.2em] text-arroz uppercase shadow-lg transition-all hover:-translate-y-0.5 hover:bg-cinabrio/90 hover:shadow-xl"
				>
					Ver proyectos
				</a>
				<a
					href="#contacto"
					class="rounded-sm border border-tinta/60 px-8 py-3 font-sanscn text-sm tracking-[0.2em] uppercase transition-all hover:-translate-y-0.5 hover:border-tinta hover:bg-tinta hover:text-arroz"
				>
					Contacto
				</a>
			</div>
		</section>

		<!-- Montañas de tinta (山水) -->
		<svg
			in:fade={{ duration: 1500, delay: 1000 }}
			class="pointer-events-none absolute bottom-0 left-0 w-full"
			viewBox="0 0 1440 320"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path
				d="M0,224 C120,180 240,120 380,150 C520,180 600,90 760,110 C920,130 1040,200 1180,180 C1300,165 1380,200 1440,190 L1440,320 L0,320 Z"
				fill="#1a1a1a"
				opacity="0.08"
			/>
			<path
				d="M0,270 C160,230 300,190 460,210 C620,230 740,160 900,180 C1060,200 1200,250 1440,230 L1440,320 L0,320 Z"
				fill="#1a1a1a"
				opacity="0.12"
			/>
		</svg>

		<!-- Indicador de scroll -->
		<div
			in:fade={{ duration: 800, delay: 1200 }}
			class="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
		>
			<span class="font-sanscn text-[10px] tracking-[0.4em] text-tinta-suave uppercase"
				>Scroll</span
			>
			<span class="scroll-line block h-10 w-px bg-tinta/50"></span>
		</div>
	</main>
{/if}

<style>
	.seal {
		animation: seal-float 5s ease-in-out infinite;
	}

	@keyframes seal-float {
		0%,
		100% {
			transform: rotate(3deg) translateY(0);
		}
		50% {
			transform: rotate(3deg) translateY(-6px);
		}
	}

	.scroll-line {
		transform-origin: top;
		animation: scroll-pulse 2s ease-in-out infinite;
	}

	@keyframes scroll-pulse {
		0%,
		100% {
			transform: scaleY(1);
			opacity: 0.6;
		}
		50% {
			transform: scaleY(0.4);
			opacity: 0.2;
		}
	}
</style>
