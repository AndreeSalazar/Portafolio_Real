<script lang="ts">
	import { onMount } from 'svelte';

	const projects = [
		{
			index: '02',
			name: 'ADead-BIB v13',
			type: 'Compilador C y toolchain nativo',
			problem:
				'Los compiladores suelen sentirse como cajas negras y obligan a depender de toolchains enormes para avanzar.',
			purpose:
				'Controlar el recorrido que convierte código humano en un programa ejecutable, desde el parser hasta el binario.',
			description:
				'Repositorio público con frontend, IR, optimización, detección de comportamiento indefinido, encoder x86-64 y escritores PE/ELF. Su propia documentación distingue objetivos terminados de áreas todavía parciales.',
			value:
				'Demuestra arquitectura de compiladores, formatos ejecutables y disciplina para auditar también lo que aún falta.',
			metric: '41',
			metricLabel: 'casos C visibles',
			tags: ['Rust', 'C99', 'x86-64', 'PE / ELF'],
			url: 'https://github.com/AndreeSalazar/ADead-BIB'
		},
		{
			index: '03',
			name: 'ASM-BIB',
			type: 'Assembler y toolchain binario',
			problem:
				'Un compilador propio sigue dependiendo de terceros si no puede ensamblar, crear objetos y enlazar sus resultados.',
			purpose:
				'Cerrar esa dependencia con un pipeline propio desde instrucciones hasta objetos COFF y ejecutables PE.',
			description:
				'Combina lexer, parser, representación intermedia, emisores MASM/NASM, encoder COFF y linker PE interno como compañero natural de ADead-BIB.',
			value:
				'Demuestra dominio de formatos binarios y herramientas que cooperan mediante contratos explícitos.',
			metric: 'COFF',
			metricLabel: 'encoder directo',
			tags: ['Rust', 'Assembler', 'COFF', 'PE'],
			url: 'https://github.com/AndreeSalazar/ASM-BIB'
		},
		{
			index: '04',
			name: 'GPU-Driven',
			type: 'Simulación masiva en GPU',
			problem:
				'Actualizar grandes cantidades de entidades en CPU limita la escala y mezcla simulación, render y sincronización.',
			purpose:
				'Mover el trabajo repetitivo a la GPU y estudiar una ejecución masiva, explícita y determinista.',
			description:
				'Demostrador público en Rust y wgpu con cómputo por workgroups, buffers explícitos y un pipeline de simulación/render documentado.',
			value:
				'Demuestra cómo convierto una hipótesis de rendimiento en una arquitectura ejecutable y medible.',
			metric: '1M',
			metricLabel: 'entidades reportadas',
			tags: ['Rust', 'wgpu', 'Compute', 'RTX 3060'],
			url: 'https://github.com/AndreeSalazar/GPU-Driven'
		},
		{
			index: '05',
			name: 'REACTOR',
			type: 'Framework para aprovechar Vulkan',
			problem:
				'Vulkan ofrece mucho control, pero exige demasiado código repetitivo antes de producir una imagen o un cálculo útil.',
			purpose:
				'Organizar la complejidad de Vulkan para concentrar el trabajo en la aplicación y no en configuración repetitiva.',
			description:
				'Framework público con una separación visible entre base Vulkan, sistemas seguros del motor y capa de aplicación. Incluye ejemplos, input alojado y una auditoría de limitaciones.',
			value:
				'Demuestra capacidad para convertir una API difícil en una arquitectura más clara y productiva.',
			metric: '3',
			metricLabel: 'capas de arquitectura',
			tags: ['Rust', 'Vulkan', 'Framework', 'GPU'],
			url: 'https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-'
		}
	];

	const skills = [
		{
			label: 'Construcción de sistemas',
			value: 'Rust · C · C++ · x86-64 Assembly · Python',
			meaning:
				'Puedo trabajar desde la idea y el diseño hasta instrucciones que ejecuta el procesador.'
		},
		{
			label: 'Arquitectura y aislamiento',
			value: 'Kernels · UEFI / MBR · Memoria · Schedulers · Ring 0/3',
			meaning:
				'Diseño límites claros para que los componentes fallen de forma controlada y el sistema siga siendo entendible.'
		},
		{
			label: 'Lenguajes y compiladores',
			value: 'Parsing · AST · IR · PE / ELF · AOT · JIT',
			meaning: 'Convierto reglas de un lenguaje en software ejecutable, verificable y optimizable.'
		},
		{
			label: 'Rendimiento medible',
			value: 'Vulkan · DX12 · CUDA · wgpu · SIMD · Profiling',
			meaning:
				'No optimizo por intuición: mido, encuentro el costo real y actúo sobre la evidencia.'
		}
	];

	const strengths = [
		{
			number: '01',
			title: 'Veo el sistema completo',
			text: 'Conecto producto, arquitectura, software y hardware para evitar soluciones locales que crean problemas nuevos.'
		},
		{
			number: '02',
			title: 'Asumo responsabilidad real',
			text: 'Puedo llevar una idea ambigua hasta una implementación que arranca, se mide y se documenta.'
		},
		{
			number: '03',
			title: 'Depuro con evidencia',
			text: 'Trabajo por hipótesis, telemetría y pruebas. En BMO-X resolví fallos de hardware usando solo diagnósticos en pantalla.'
		},
		{
			number: '04',
			title: 'Simplifico sin ocultar',
			text: 'Busco interfaces pequeñas y explicables, manteniendo visibles los costos y las decisiones importantes.'
		}
	];

	const bmoStatus = [
		['Boot chain UEFI', 'Hardware real · no QEMU', 'done'],
		['Meta-kernel Ring 0', 'Capabilities estables', 'done'],
		['Userspace Ring 3', 'Ejecutando', 'done'],
		['Aislamiento de fallos', 'Implementado', 'done'],
		['Teclado USB', 'Escribe en HW · intervalo corregido', 'done'],
		['Mouse USB', 'Enumera · puntero en compositor', 'progress'],
		['SATA / AHCI', 'GPT + lectura verificadas', 'done'],
		['BEF + verificación', 'Pipeline funcional', 'done'],
		['Procesos BEX', 'ASM · C · COBOL terminan', 'done'],
		['Programa BMO COBOL', 'Ejecuta lógica en Ryzen real', 'done'],
		['Frontend BMO COBOL', 'Base sólida · 10–15%', 'progress'],
		['Desktop / compositor', 'Próximo frente', 'planned']
	];

	const cobolPrograms = [
		{
			name: 'hola.cob',
			label: 'La primera voz',
			text: 'Comprueba que DISPLAY atraviesa la puerta genérica INVOKE y llega desde Ring 3 a la consola de BMO-X.',
			state: 'Corte mínimo'
		},
		{
			name: 'banco.cob',
			label: 'La regla financiera',
			text: 'Ejercita cuotas, repeticiones, decisiones y devoluciones con dinero representado en centavos, sin punto flotante.',
			state: 'Prueba de lenguaje'
		},
		{
			name: 'hola_COBOL.cob',
			label: 'La integración completa',
			text: 'Reúne variables PIC, escalas distintas, IF/ELSE, dos formas de PERFORM, ADD y COMPUTE en el BEX ejecutado por el Ryzen.',
			state: 'Probado en hardware'
		}
	];

	const hardwareEvidence = [
		{
			index: '01',
			title: 'COBOL ya ejecuta lógica, no solo un saludo',
			image: '/images/bmo-x/01-cobol-ring3-hardware.png',
			width: 899,
			height: 1599,
			alt: 'BMO-X en hardware real mostrando programas ASM, C y COBOL ejecutados en Ring 3',
			status: 'Ejecución completa',
			description:
				'La salida confirma decimal exacto, cargo con cambio de escala, repetición, devolución y terminación correcta. En la misma sesión, ASM cruza de CPL3 a CPL0 y C completa sus cálculos.',
			facts: ['3 × 19.99 = 59.97', 'CPL3 → INVOKE → CPL0', 'ASM · C · COBOL']
		},
		{
			index: '02',
			title: 'Un fallo visible se convirtió en diagnóstico',
			image: '/images/bmo-x/02-diagnostico-hardware.png',
			width: 1599,
			height: 899,
			alt: 'Diagnóstico de BMO-X con SATA, GPT, procesos Ring 3 y un fallo intermedio del teclado USB',
			status: 'Etapa de depuración',
			description:
				'Esta captura conserva un estado intermedio: el teclado enumeraba, pero kev=0 probaba que no entregaba teclas. El seguimiento encontró que bInterval se trataba como valor directo y no como exponente; la corrección posterior ya permite escribir en hardware.',
			facts: ['GPT: 3 particiones', '3 procesos finalizan', 'Fallo USB medido']
		},
		{
			index: '03',
			title: 'El meta-kernel reconoce el disco real',
			image: '/images/bmo-x/03-almacenamiento-ahci.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X identificando un SSD Kingston SATA y leyendo su tabla GPT',
			status: 'Almacenamiento verificado',
			description:
				'BMO-X identifica un Kingston A400 de 447 GiB por AHCI, cuenta sectores y lee tres particiones GPT. La pantalla también deja claro el límite de esa prueba: escritura todavía bloqueada hasta identificar el disco.',
			facts: ['Kingston · 447 GiB', 'AHCI · puerto 2', 'Modo solo lectura']
		},
		{
			index: '04',
			title: 'Tres lenguajes, tres procesos independientes',
			image: '/images/bmo-x/04-procesos-bex.png',
			width: 1599,
			height: 899,
			alt: 'Tabla de BMO-X con procesos BEX independientes para ASM, C y COBOL en estado terminado',
			status: 'Aislamiento observable',
			description:
				'ASM, C y COBOL aparecen con PID, TID, tamaño, secciones y ciclo de vida propios. Los tres llegan a “terminado”: no son textos impresos por un único programa disfrazado, sino imágenes BEX cargadas y administradas por separado.',
			facts: ['PID 1 · 2 · 3', 'TID 2 · 3 · 4', 'Todos terminados']
		}
	];

	let menuOpen = $state(false);

	function moveHero(event: PointerEvent) {
		const hero = event.currentTarget as HTMLElement;
		const rect = hero.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width - 0.5;
		const y = (event.clientY - rect.top) / rect.height - 0.5;
		hero.style.setProperty('--pointer-x', `${x * 24}px`);
		hero.style.setProperty('--pointer-y', `${y * 18}px`);
	}

	onMount(() => {
		document.documentElement.classList.add('motion-ready');
		const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
		);

		for (const element of elements) observer.observe(element);

		return () => {
			observer.disconnect();
			document.documentElement.classList.remove('motion-ready');
		};
	});
</script>

<svelte:head>
	<title>Eddi Andreé Salazar — Systems Software Engineer</title>
	<meta
		name="description"
		content="Portafolio de Eddi Andreé Salazar Matos, ingeniero de software de sistemas y arquitecto de sistemas especializado en kernels, compiladores y cómputo GPU."
	/>
	<meta name="theme-color" content="#0b0b0a" />
	<meta property="og:title" content="Eddi Andreé Salazar — Systems Software Engineer" />
	<meta
		property="og:description"
		content="Compiladores, sistemas operativos y cómputo de bajo nivel construidos desde sus fundamentos."
	/>
</svelte:head>

<div class="site-shell">
	<header class="topbar">
		<a class="brand" href="#inicio" aria-label="Volver al inicio">
			<span class="brand-seal" aria-hidden="true">工</span>
			<span><b>Eddi Salazar</b><small>Systems Engineer</small></span>
		</a>

		<nav class:open={menuOpen} aria-label="Navegación principal">
			<a href="#valor" onclick={() => (menuOpen = false)}>Lo que aporto</a>
			<a href="#bmo" onclick={() => (menuOpen = false)}>BMO-X</a>
			<a href="#proyectos" onclick={() => (menuOpen = false)}>Proyectos</a>
			<a href="#contacto" onclick={() => (menuOpen = false)}>Contacto</a>
			<a href="https://github.com/AndreeSalazar" target="_blank" rel="noreferrer">GitHub ↗</a>
		</nav>

		<button
			class="menu-button"
			type="button"
			aria-label="Abrir menú"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span>
		</button>
	</header>

	<main>
		<section class="hero" id="inicio" aria-labelledby="hero-title" onpointermove={moveHero}>
			<div class="hero-grid" aria-hidden="true"></div>
			<div class="hero-glow" aria-hidden="true"></div>
			<div class="hero-orbit orbit-one" aria-hidden="true"></div>
			<div class="hero-orbit orbit-two" aria-hidden="true"></div>
			<div class="vertical-mark" aria-hidden="true">
				<span>大道至简</span><small>EL GRAN CAMINO ES SIMPLE</small>
			</div>

			<div class="hero-copy">
				<p class="eyebrow"><span></span> Lima, Perú · R&D independiente</p>
				<h1 id="hero-title">
					Convierto complejidad<br />
					en sistemas <em>claros.</em>
				</h1>
				<p class="hero-lead">
					Soy Eddi Salazar, ingeniero de software de sistemas. Construyo tecnología desde sus
					fundamentos para crear soluciones rápidas, controlables y capaces de crecer sin
					convertirse en una caja negra.
				</p>
				<div class="hero-proof" aria-label="Resumen profesional">
					<span><i>01</i> Arquitectura de sistemas</span>
					<span><i>02</i> Compiladores y lenguajes</span>
					<span><i>03</i> Rendimiento y hardware</span>
				</div>
				<div class="hero-actions">
					<a class="button primary" href="#bmo">Explorar BMO-X <span>↘</span></a>
					<a class="button ghost" href="#proyectos">Ver trabajo seleccionado</a>
				</div>
			</div>

			<div class="hero-aside">
				<div class="ensō" aria-hidden="true"><span>系</span></div>
				<p><b>01 / 05</b> Proyecto destacado</p>
				<div class="aside-line"></div>
				<p class="mono">RUST · C · C++ · ASM<br />X86-64 · GPU · BARE METAL</p>
			</div>

			<div class="hero-foot">
				<span>Desplazar para explorar</span>
				<div></div>
			</div>
		</section>

		<div class="motion-marquee" aria-hidden="true">
			<div>
				<span>SYSTEMS ARCHITECTURE</span><i>◆</i><span>COMPILERS</span><i>◆</i><span
					>BARE METAL</span
				><i>◆</i><span>PERFORMANCE</span><i>◆</i><span>RUST · C · C++ · ASM</span><i>◆</i>
				<span>SYSTEMS ARCHITECTURE</span><i>◆</i><span>COMPILERS</span><i>◆</i><span
					>BARE METAL</span
				><i>◆</i><span>PERFORMANCE</span><i>◆</i><span>RUST · C · C++ · ASM</span><i>◆</i>
			</div>
		</div>

		<section class="statement section-pad" id="perfil">
			<div class="section-kicker" data-reveal><span>序</span> PERFIL / 2019—PRESENTE</div>
			<div class="statement-grid" data-reveal>
				<h2>No solo programo.<br /><i>Entiendo el porqué.</i></h2>
				<div>
					<p class="large-copy">
						Me especializo en problemas donde no basta con conectar herramientas: hay que entender
						qué ocurre debajo, decidir bien los límites y construir una base confiable.
					</p>
					<p>
						Desde 2019 mantengo un laboratorio independiente con 43 repositorios públicos. No son
						solo demostraciones: son una forma sostenida de aprender, validar ideas y enfrentar
						proyectos que exigen paciencia, diseño y responsabilidad de extremo a extremo.
					</p>
				</div>
			</div>

			<div class="numbers" aria-label="Métricas destacadas" data-reveal>
				<div><strong>6<sup>+</sup></strong><span>Años de I+D<br />independiente</span></div>
				<div><strong>43</strong><span>Repositorios<br />públicos</span></div>
				<div><strong>41</strong><span>Casos C visibles<br />en ADead-BIB</span></div>
				<div><strong>32</strong><span>Tests del frontend<br />BMO COBOL</span></div>
			</div>
		</section>

		<section class="value-section section-pad" id="valor">
			<div class="value-heading" data-reveal>
				<div>
					<div class="section-kicker light"><span>能</span> LO QUE APORTO A UN EQUIPO</div>
					<h2>Profundidad técnica<br />con <i>criterio de producto.</i></h2>
				</div>
				<div class="recruiter-note">
					<span>EN UNA FRASE</span>
					<p>
						Un ingeniero para problemas difíciles, capaz de investigar lo desconocido, explicar sus
						decisiones y convertirlas en software real.
					</p>
				</div>
			</div>

			<div class="strength-grid" data-reveal>
				{#each strengths as strength (strength.number)}
					<article>
						<span>{strength.number}</span>
						<div class="strength-icon" aria-hidden="true">
							{strength.number === '01'
								? '全'
								: strength.number === '02'
									? '責'
									: strength.number === '03'
										? '証'
										: '簡'}
						</div>
						<h3>{strength.title}</h3>
						<p>{strength.text}</p>
					</article>
				{/each}
			</div>

			<div class="role-fit" data-reveal>
				<span>PUEDO APORTAR ESPECIALMENTE EN</span>
				<p>Ingeniería de sistemas</p>
				<i></i>
				<p>Compiladores</p>
				<i></i>
				<p>Plataformas</p>
				<i></i>
				<p>Rendimiento</p>
				<i></i>
				<p>I+D aplicada</p>
			</div>
		</section>

		<section class="bmo-section section-pad" id="bmo">
			<div class="bmo-head" data-reveal>
				<div>
					<div class="section-kicker light"><span>壹</span> PROYECTO PRINCIPAL / EN DESARROLLO</div>
					<h2>BMO-X</h2>
					<p class="bmo-subtitle">Bare Metal Orchestrator · Meta-Kernel</p>
				</div>
				<div class="status-badge"><i></i> Validado en hardware real · no QEMU</div>
			</div>

			<div class="bmo-intro" data-reveal>
				<p class="bmo-quote">
					No es un OS tradicional. Es un <em>meta-kernel</em> que organiza ejecución, autoridad y formatos
					desde el metal.
				</p>
				<p>
					BMO significa Bare Metal Orchestrator. No intenta copiar Windows o Linux función por
					función: arranca el hardware, aplica capabilities, ofrece tres puertas estables y coordina
					contenedores BEF. Cada lenguaje conserva su frontend y su semántica; BMO controla cómo el
					resultado se valida y obtiene autoridad para ejecutarse.
				</p>
			</div>

			<div class="bmo-why" data-reveal>
				<article>
					<span>EL PROBLEMA</span>
					<h3>Lógica crítica atrapada en capas opacas</h3>
					<p>
						En banca, una regla COBOL puede seguir siendo correcta después de décadas, pero
						ejecutarla depende de plataformas difíciles de reemplazar, inspeccionar y aislar.
					</p>
				</article>
				<article class="featured">
					<span>POR QUÉ EXISTE</span>
					<h3>Una base estrecha que pueda auditarse</h3>
					<p>
						BMO reduce la entrada al meta-kernel a tres operaciones. Menos puertas fundamentales
						significan menos contratos que revisar, probar y mantener estables.
					</p>
				</article>
				<article>
					<span>PARA QUÉ SIRVE</span>
					<h3>Un contenedor común, no un lenguaje único</h3>
					<p>
						BEF empaqueta el resultado de COBOL, C, C++ u otros frontends. BMO verifica el
						contenedor, asigna capabilities y coordina su ejecución nativa.
					</p>
				</article>
			</div>

			<div class="bmo-impact" data-reveal>
				<div class="impact-heading">
					<span>PERSPECTIVA DE UN GERENTE BANCARIO</span>
					<h3>No evaluaría “un kernel”. Evaluaría control, trazabilidad y riesgo.</h3>
					<p>
						El interés práctico de BMO-X es separar la regla del lenguaje, el contenedor ejecutable
						y la autoridad del sistema. Así, una auditoría podría preguntar por separado: qué hace
						el programa, qué contiene el BEF y qué permisos recibió al ejecutarse.
					</p>
				</div>
				<div class="impact-list">
					<article>
						<b>01</b>
						<div>
							<h4>Modernización sin perder precisión</h4>
							<p>
								Explora cómo llevar lógica COBOL a una plataforma nueva conservando el
								comportamiento decimal que exigen los procesos financieros.
							</p>
						</div>
					</article>
					<article>
						<b>02</b>
						<div>
							<h4>Menor superficie de cambio</h4>
							<p>
								Tres puertas estables reducen el número de contratos fundamentales que deben
								mantenerse, probarse y protegerse.
							</p>
						</div>
					</article>
					<article>
						<b>03</b>
						<div>
							<h4>Autoridad explícita</h4>
							<p>
								El modelo de capabilities busca que cada programa reciba solo los permisos que
								necesita, haciendo más visible quién puede hacer qué.
							</p>
						</div>
					</article>
				</div>
				<div class="impact-honesty">
					<i></i>
					<p>
						<strong>Estado honesto:</strong> es una plataforma experimental de I+D, no un producto bancario
						listo para producción. Su valor actual está en la arquitectura validada, el aprendizaje acumulado
						y la capacidad de ejecución que demuestra.
					</p>
				</div>
			</div>

			<div class="technical-divider" data-reveal>
				<span>LA IDEA TÉCNICA, EN UNA SOLA LÍNEA</span>
			</div>
			<div class="syscall-strip" data-reveal>
				<div><span>01</span><b>INVOKE</b><small>Pedir una operación</small></div>
				<div><span>02</span><b>CHANNEL_KICK</b><small>Avisar que hay trabajo</small></div>
				<div><span>03</span><b>WAIT</b><small>Esperar sin desperdiciar recursos</small></div>
			</div>

			<div class="bmo-details" data-reveal>
				<div class="architecture-card">
					<div class="card-label">DE UNA REGLA DE NEGOCIO AL HARDWARE</div>
					<div class="flow">
						<div>
							<small>01</small><b>COBOL · C · C++ · OTROS</b><span
								>Cada frontend conserva su semántica</span
							>
						</div>
						<i>↓</i>
						<div>
							<small>02</small><b>BEF</b><span>Contenedor común con código y metadatos</span>
						</div>
						<i>↓</i>
						<div>
							<small>03</small><b>VERIFY + BEX</b><span
								>Validación y descenso al ejecutable nativo</span
							>
						</div>
						<i>↓</i>
						<div>
							<small>04</small><b>BMO META-KERNEL</b><span
								>Capabilities, aislamiento y tres puertas</span
							>
						</div>
						<i>↓</i>
						<div class="accent">
							<small>05</small><b>HARDWARE REAL</b><span>Ryzen 5 5600X · x86-64 · no QEMU</span>
						</div>
					</div>
				</div>

				<div class="status-card">
					<div class="card-label">ESTADO VERIFICADO / JULIO 2026</div>
					<ul>
						{#each bmoStatus as item (item[0])}
							<li>
								<i class={item[2]}></i><span>{item[0]}</span><small>{item[1]}</small>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="cobol-callout" data-reveal>
				<div class="cobol-title">
					<span>FOCO ACTUAL / MODERNIZACIÓN</span>
					<h3>BMO COBOL</h3>
				</div>
				<p>
					COBOL todavía sostiene procesos financieros y administrativos esenciales. BMO COBOL ya
					tiene lexer, parser por tokens, PIC propio, decimal exacto y salida BEF de extremo a
					extremo. Un programa generado ya saluda y calcula <strong>3 × 19.99 = 59.97</strong> dentro
					de BMO-X sobre un Ryzen real. Eso demuestra el corte vertical completo; no significa que todo
					COBOL esté implementado. Records avanzados, verbos, archivos, intrínsecas y runtime mantienen
					el frontend en aproximadamente 10–15%.
				</p>
				<div class="cobol-metrics">
					<div><b>32</b><span>tests verdes</span></div>
					<div><b>556</b><span>palabras catalogadas</span></div>
					<div><b>10–15%</b><span>estado honesto</span></div>
				</div>
			</div>

			<div class="cobol-source" data-reveal>
				<div class="source-heading">
					<div class="card-label">TRES FUENTES / UNA PROGRESIÓN VERIFICABLE</div>
					<h3>No escribí una demostración vacía.<br /><i>Escribí reglas que pueden fallar.</i></h3>
					<p>
						Los tres ejemplos cumplen funciones distintas. El primero abre el camino; el segundo
						prueba comportamiento financiero; el tercero integra todo y produce la evidencia visible
						en el Ryzen.
					</p>
				</div>
				<div class="source-code" aria-label="Fragmento real de hola_COBOL.cob">
					<div><span></span><span></span><span></span><small>hola_COBOL.cob</small></div>
					<pre><code
							><b>MOVE</b> 19.99 <b>TO</b> CUOTA.
<b>PERFORM</b> 3 <b>TIMES</b>
    <b>ADD</b> CUOTA <b>TO</b> SALDO
<b>END-PERFORM</b>.

<b>IF</b> SALDO = 59.97
    <b>DISPLAY</b> "3 x 19.99 = 59.97 exacto"
<b>END-IF</b>.</code
						></pre>
				</div>
			</div>

			<div class="cobol-programs" data-reveal>
				{#each cobolPrograms as program, index (program.name)}
					<article>
						<span>0{index + 1} / {program.state}</span>
						<small>{program.name}</small>
						<h4>{program.label}</h4>
						<p>{program.text}</p>
					</article>
				{/each}
			</div>

			<div class="evidence-heading" data-reveal>
				<div>
					<div class="section-kicker light"><span>证</span> CUATRO CAPTURAS / CUATRO PRUEBAS</div>
					<h3>Lo que afirmo<br /><i>se puede observar.</i></h3>
				</div>
				<p>
					Una sola foto puede parecer una casualidad. Esta secuencia conecta lenguaje, procesos,
					privilegios, almacenamiento y depuración en el mismo sistema sobre hardware físico.
				</p>
			</div>

			<div class="hardware-gallery">
				{#each hardwareEvidence as evidence (evidence.index)}
					<figure class:featured={evidence.index === '01'} class="evidence-card" data-reveal>
						<div class="evidence-photo">
							<img
								src={evidence.image}
								alt={evidence.alt}
								loading="lazy"
								width={evidence.width}
								height={evidence.height}
							/>
							<span>{evidence.index} · CAPTURA DIRECTA / HARDWARE REAL</span>
						</div>
						<figcaption>
							<div class="evidence-meta"><span>{evidence.status}</span><i></i></div>
							<h4>{evidence.title}</h4>
							<p>{evidence.description}</p>
							<ul>
								{#each evidence.facts as fact (fact)}<li>{fact}</li>{/each}
							</ul>
						</figcaption>
					</figure>
				{/each}
			</div>

			<div class="proof-boundary" data-reveal>
				<div>
					<span>SÍ DEMUESTRA</span>
					<p>
						Fuente COBOL → frontend → BEF/BEX → verificación → proceso Ring 3 → INVOKE → Ring 0 →
						salida en hardware real, además de carga separada para ASM y C.
					</p>
				</div>
				<div>
					<span>TODAVÍA NO AFIRMA</span>
					<p>
						Compatibilidad COBOL completa, runtime bancario productivo, escritura general de disco o
						un escritorio terminado. El valor está en un núcleo real, medible y ampliable.
					</p>
				</div>
			</div>

			<section class="strata-feature" aria-labelledby="strata-title">
				<div class="strata-intro" data-reveal>
					<div>
						<div class="section-kicker light">
							<span>层</span> ARQUITECTURA EN DESARROLLO / TIMEBACK
						</div>
						<p class="strata-status"><i></i> Diseño definido · implementación progresiva</p>
					</div>
					<h3 id="strata-title">ESTRATOS</h3>
					<p class="strata-lead">
						Cada escritura crea una capa nueva sin destruir inmediatamente la anterior.
						<strong>Guardar también significa recordar.</strong>
					</p>
				</div>

				<div class="strata-concept" data-reveal>
					<div
						class="strata-visual"
						aria-label="Representación de cuatro estados conservados por ESTRATOS"
					>
						<div class="stratum stratum-four">
							<span>04</span><b>AHORA</b><small>nuevo estado verificado</small><i></i>
						</div>
						<div class="stratum stratum-three">
							<span>03</span><b>ANTES DE INSTALAR</b><small>raíz anterior intacta</small><i></i>
						</div>
						<div class="stratum stratum-two">
							<span>02</span><b>COBOL FUNCIONANDO</b><small>estrato conservado</small><i></i>
						</div>
						<div class="stratum stratum-one">
							<span>01</span><b>ORIGEN</b><small>primera raíz válida</small><i></i>
						</div>
						<div class="strata-axis"><span>TIEMPO</span><i></i></div>
					</div>

					<div class="strata-story">
						<div class="card-label">LA IDEA, SIN JERGA</div>
						<h4>Volver atrás no sería reconstruir.<br /><i>Sería volver a montar.</i></h4>
						<p>
							ESTRATOS está diseñado como un sistema copy-on-write: escribe datos nuevos, verifica
							la nueva raíz y solo entonces la convierte en el estado actual. Si una operación se
							interrumpe antes, la raíz anterior permanece disponible.
						</p>
						<div class="strata-transaction">
							<span><b>01</b> escribir sin sobrescribir</span>
							<i>→</i>
							<span><b>02</b> verificar contenido</span>
							<i>→</i>
							<span><b>03</b> publicar nueva raíz</span>
						</div>
					</div>
				</div>

				<div class="strata-value" data-reveal>
					<article>
						<span>01 / INTEGRIDAD</span>
						<h4>Detectar corrupción</h4>
						<p>
							Bloques, nodos y raíces usarían BLAKE3. Si el contenido no coincide con su hash,
							CABINA lo trataría como un fallo, no como un archivo misteriosamente alterado.
						</p>
					</article>
					<article>
						<span>02 / TRAZABILIDAD</span>
						<h4>Conservar procedencia</h4>
						<p>
							Un BEX podría mantener juntos código, firma, manifiesto de capabilities y origen: qué
							fuente lo produjo, con qué herramienta y bajo qué estado del sistema.
						</p>
					</article>
					<article>
						<span>03 / AUTORIDAD</span>
						<h4>El permiso es el handle</h4>
						<p>
							Un proceso solo podría recorrer el árbol que recibió. Sus derechos de lectura,
							escritura o ejecución podrían reducirse, nunca ampliarse silenciosamente.
						</p>
					</article>
					<article>
						<span>04 / RECUPERACIÓN</span>
						<h4>Historia como propiedad</h4>
						<p>
							TimeBack dejaría de duplicar archivos en una base paralela: log, diff y restore se
							convertirían en distintas vistas de los estratos que ya existen en el disco.
						</p>
					</article>
				</div>

				<div class="bex-anatomy" data-reveal>
					<div class="bex-copy">
						<span>UN EJECUTABLE COMO OBJETO AUDITABLE</span>
						<h4>El programa y su contexto<br /><i>viajan juntos.</i></h4>
						<p>
							La propuesta evita archivos de metadatos sueltos. Firma, permisos solicitados y
							procedencia serían atributos del mismo nodo que contiene el ejecutable.
						</p>
					</div>
					<div class="bex-object">
						<header><i></i><b>hola_COBOL.bex</b><small>OBJETO / ESTRATOS</small></header>
						<div>
							<span>:datos</span>
							<p>Código nativo que se ejecuta</p>
							<i>BEF/BEX</i>
						</div>
						<div>
							<span>:firma</span>
							<p>Integridad verificada</p>
							<i>BLAKE3</i>
						</div>
						<div>
							<span>:manifiesto</span>
							<p>Capabilities solicitadas</p>
							<i>AUTH</i>
						</div>
						<div>
							<span>:origen</span>
							<p>Fuente, compilador y momento</p>
							<i>TRACE</i>
						</div>
					</div>
				</div>

				<div class="strata-roadmap" data-reveal>
					<div class="roadmap-heading">
						<span>ORDEN DE CONSTRUCCIÓN</span>
						<h4>Primero proteger los datos.<br /><i>Después escribirlos.</i></h4>
						<p>
							El diseño no habilita escritura por entusiasmo. Cada etapa exige que la inferior esté
							probada, especialmente identidad del disco, barreras y recuperación.
						</p>
					</div>
					<ol>
						<li class="active">
							<b>01</b><span>Base física</span><small>AHCI, sectores y GPT ya observables</small>
						</li>
						<li>
							<b>02</b><span>FAT32 + identidad</span><small>lectura y gate antes de escribir</small>
						</li>
						<li>
							<b>03</b><span>Capa de bloques</span><small>contrato común para AHCI y NVMe</small>
						</li>
						<li>
							<b>04</b><span>ESTRATOS lectura</span><small>montar y validar sin riesgo</small>
						</li>
						<li><b>05</b><span>Escritura</span><small>log, barreras y raíz alterna</small></li>
						<li>
							<b>06</b><span>GC + TimeBack</span><small>retención, diff y recuperación</small>
						</li>
					</ol>
				</div>

				<div class="strata-honesty" data-reveal>
					<strong>ESTADO HONESTO / JULIO 2026</strong>
					<p>
						<strong
							>TimeBack ya aporta el modelo de blobs, árboles, commits, refs, journal y CLI;</strong
						>
						parte de su captura y rollback todavía es infraestructura parcial. ESTRATOS es un diseño arquitectónico
						documentado, aún no un sistema de ficheros implementado. La lectura SATA/GPT y la identificación
						física son la base sobre la que se está construyendo.
					</p>
					<span>DISEÑO ≠ CAPACIDAD TERMINADA</span>
				</div>
			</section>

			<p class="evidence-note">
				<span>NOTA DE INGENIERÍA</span> Las capturas corresponden a etapas distintas del desarrollo. Los
				fallos históricos se muestran porque documentar cómo se detectaron y corrigieron también es parte
				de la evidencia. Estado contrastado con la bitácora del proyecto en julio de 2026.
			</p>
		</section>

		<section class="projects section-pad" id="proyectos">
			<div class="projects-head" data-reveal>
				<div>
					<div class="section-kicker"><span>作</span> TRABAJO SELECCIONADO</div>
					<h2>Otros sistemas,<br /><i>la misma obsesión.</i></h2>
				</div>
				<p>
					Cada proyecto parte de una pregunta real, construye una respuesta y deja evidencia
					medible.
				</p>
			</div>

			<div class="project-list">
				{#each projects as project (project.name)}
					<article class="project-row" data-reveal>
						<div class="project-topline">
							<div class="project-index">{project.index}</div>
							<p>{project.type}</p>
							<div class="project-metric">
								<b>{project.metric}</b><span>{project.metricLabel}</span>
							</div>
						</div>
						<div class="project-body">
							<div class="project-main">
								<h3>{project.name}</h3>
								<p class="project-problem"><span>EL PROBLEMA</span>{project.problem}</p>
								<p class="project-purpose"><span>POR QUÉ EXISTE</span>{project.purpose}</p>
							</div>
							<div class="project-story">
								<p class="project-description">{project.description}</p>
								<p class="project-value"><span>LO QUE DEMUESTRA</span>{project.value}</p>
							</div>
						</div>
						<div class="project-bottom">
							<div class="tags">
								{#each project.tags as tag (tag)}<span>{tag}</span>{/each}
							</div>
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a class="repo-link" href={project.url} target="_blank" rel="noreferrer"
								>Ver código y documentación <span>↗</span></a
							>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="github-proof section-pad" id="github">
			<div class="github-head" data-reveal>
				<div>
					<div class="section-kicker light"><span>证</span> EVIDENCIA PÚBLICA / GITHUB</div>
					<h2>La ambición importa.<br /><i>La evidencia también.</i></h2>
				</div>
				<div class="github-profile-card">
					<span class="github-mark" aria-hidden="true">&lt;/&gt;</span>
					<div>
						<small>GITHUB.COM</small><b>@AndreeSalazar</b>
						<p>Rust · Makefile · C++</p>
					</div>
					<a href="https://github.com/AndreeSalazar" target="_blank" rel="noreferrer"
						>Abrir perfil ↗</a
					>
				</div>
			</div>

			<div class="public-proof" data-reveal>
				<div class="proof-summary">
					<strong>43</strong>
					<span>repositorios públicos observables</span>
					<p>
						El perfil muestra trabajo sostenido en compiladores, formatos binarios, ensambladores,
						GPU y runtimes experimentales.
					</p>
				</div>
				<div class="proof-repos">
					<a href="https://github.com/AndreeSalazar/ADead-BIB" target="_blank" rel="noreferrer"
						><span>COMPILER</span><b>ADead-BIB</b><small>Rust · C99 · PE/ELF</small><i>↗</i></a
					>
					<a href="https://github.com/AndreeSalazar/ASM-BIB" target="_blank" rel="noreferrer"
						><span>TOOLCHAIN</span><b>ASM-BIB</b><small>Assembler · COFF · PE</small><i>↗</i></a
					>
					<a
						href="https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-"
						target="_blank"
						rel="noreferrer"
						><span>GRAPHICS</span><b>REACTOR</b><small>Rust · Vulkan</small><i>↗</i></a
					>
					<a href="https://github.com/AndreeSalazar/GPU-Driven" target="_blank" rel="noreferrer"
						><span>COMPUTE</span><b>GPU-Driven</b><small>Rust · wgpu</small><i>↗</i></a
					>
				</div>
			</div>

			<div class="proof-disclosure" data-reveal>
				<span>TRANSPARENCIA</span>
				<p>
					BMO-X, BEF y BMO COBOL se documentan aquí desde el árbol de trabajo y sus pruebas locales;
					todavía no aparecen como repositorios públicos en este perfil. Los proyectos enlazados
					arriba sí pueden inspeccionarse directamente.
				</p>
			</div>
		</section>

		<section class="expertise section-pad">
			<div class="section-kicker light" data-reveal><span>器</span> CAPACIDADES / EN CONTEXTO</div>
			<div class="expertise-grid" data-reveal>
				<div>
					<h2>La tecnología es<br />un <i>medio, no el fin.</i></h2>
					<p>
						Estas herramientas importan porque me permiten resolver problemas en distintas capas y
						entender cómo una decisión termina afectando al usuario, al equipo y al hardware.
					</p>
				</div>
				<div class="skill-list">
					{#each skills as skill, i (skill.label)}
						<div>
							<span>0{i + 1}</span><b>{skill.label}</b>
							<p>{skill.meaning}</p>
							<small>{skill.value}</small>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="method section-pad">
			<div class="method-intro">
				<div class="section-kicker"><span>法</span> CÓMO TRABAJO</div>
				<h2>Del problema<br />a la <i>evidencia.</i></h2>
				<p>
					Mi proceso reduce incertidumbre antes de aumentar complejidad. Cada etapa debe producir
					algo que el equipo pueda revisar.
				</p>
			</div>
			<div class="method-track" data-reveal>
				<article>
					<span>01</span>
					<div>
						<b>Entender</b>
						<p>Defino el problema, las restricciones y qué significa realmente tener éxito.</p>
					</div>
				</article>
				<article>
					<span>02</span>
					<div>
						<b>Diseñar</b>
						<p>
							Divido el sistema en contratos pequeños, responsabilidades claras y riesgos
							verificables.
						</p>
					</div>
				</article>
				<article>
					<span>03</span>
					<div>
						<b>Construir</b>
						<p>
							Implemento de abajo hacia arriba, manteniendo observabilidad y documentación útil.
						</p>
					</div>
				</article>
				<article>
					<span>04</span>
					<div>
						<b>Demostrar</b>
						<p>Mido en condiciones reales, documento límites y separo hechos de planes futuros.</p>
					</div>
				</article>
			</div>
		</section>

		<section class="credentials section-pad">
			<div class="credentials-grid" data-reveal>
				<div>
					<div class="section-kicker"><span>学</span> FORMACIÓN Y CREDENCIALES</div>
					<h2>Fundamentos sólidos,<br /><i>curiosidad permanente.</i></h2>
					<p class="credentials-note">
						La formación acompaña una práctica independiente continua: cada concepto aprendido
						termina probado en un sistema propio.
					</p>
				</div>
				<div class="timeline">
					<div class="timeline-item featured">
						<span>2024—2025</span>
						<div>
							<h3>Ingeniería de Computación</h3>
							<p>Universidad Nacional Federico Villarreal</p>
						</div>
					</div>
					<div class="timeline-item">
						<span>CERT.</span>
						<div>
							<h3>Rust y Data Engineering with Rust</h3>
							<p>Coursera · Formación y certificación especializada</p>
						</div>
					</div>
					<div class="timeline-item">
						<span>CERT.</span>
						<div>
							<h3>C · C++ · Unreal Engine · R</h3>
							<p>Udemy · Formación técnica complementaria</p>
						</div>
					</div>
					<div class="timeline-item">
						<span>CERT.</span>
						<div>
							<h3>Angular · Java · Data Analyst with Python</h3>
							<p>Desarrollo de aplicaciones y análisis de datos</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="contact section-pad" id="contacto">
			<div class="contact-character" aria-hidden="true">合</div>
			<div class="section-kicker light"><span>信</span> CONTACTO</div>
			<h2 data-reveal>¿Tu equipo enfrenta un<br /><i>problema difícil?</i></h2>
			<p>
				Puedo aportar investigación, arquitectura y ejecución técnica en proyectos de sistemas,
				compiladores, plataformas, rendimiento o I+D. Me interesa trabajar donde comprender bien el
				problema sea tan importante como escribir el código.
			</p>
			<a
				class="button primary large"
				href="mailto:?subject=Contacto%20desde%20el%20portafolio%20de%20Eddi%20Salazar"
			>
				Iniciar una conversación <span>↗</span>
			</a>
			<small class="contact-note"
				>Correo profesional y perfiles públicos pendientes de añadir.</small
			>
		</section>
	</main>

	<footer>
		<div class="brand footer-brand">
			<span class="brand-seal" aria-hidden="true">工</span>
			<span><b>Eddi Andreé Salazar Matos</b><small>Systems Software Engineer</small></span>
		</div>
		<p>Lima, Perú <span>·</span> Diseñado con precisión y respeto por la tradición visual.</p>
		<a href="#inicio">Volver arriba ↑</a>
	</footer>
</div>
