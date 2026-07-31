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
		['Userspace Ring 3', 'Probado · XSAVE confirmado en metal', 'done'],
		['Aislamiento de fallos', 'Implementado', 'done'],
		['Teclado USB', 'Escribe en HW · intervalo corregido', 'done'],
		['Mouse USB', 'Puntero + botones por capability', 'done'],
		['SATA / AHCI + FAT32', 'Lectura y escritura controlada', 'done'],
		['ESTRATOS v1', 'Montaje + lectura en hardware', 'done'],
		['BEF + verificación', 'Pipeline funcional', 'done'],
		['BEX desde disco', 'C + COBOL admitidos y ejecutados', 'done'],
		['Programa BMO COBOL', 'Ejecuta lógica en Ryzen real', 'done'],
		['KIND_ARCHIVO', 'Ring 3 lee y guarda en FAT32', 'done'],
		['Batch COBOL', 'Cierre leído en HW · reinicio pendiente', 'progress'],
		['Frontend BMO Ada', '20/20 tests · BEX en hardware', 'done'],
		['Frontend BMO COBOL', 'Base sólida · 10–15%', 'progress'],
		['Escritura ESTRATOS', 'Siguiente etapa crítica', 'planned'],
		['Desktop / compositor', 'GUI cargada desde disco', 'done']
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
		},
		{
			name: 'extracto.cob',
			label: 'La línea bancaria',
			text: 'Calcula un saldo, protege un talón con asteriscos, aplica formato monetario y marca un descubierto con CR.',
			state: 'Probado en hardware'
		},
		{
			name: 'batch.cob',
			label: 'El cierre nocturno',
			text: 'Lee movimientos, totaliza centavos, crea un cierre y solo persiste el resultado al ejecutar CLOSE.',
			state: 'Software verificado · HW siguiente'
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
		},
		{
			index: '05',
			title: 'Del sector a un archivo real',
			image: '/images/bmo-x/05-fat32-boot-volume.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X recorriendo AHCI, GPT y FAT32 hasta leer la cabecera de BOOTX64.EFI',
			status: 'Cadena de lectura completa',
			description:
				'BMO-X monta la partición FAT32 en solo lectura, entra en EFI/BOOT, encuentra BOOTX64.EFI por su clúster y lee 64 bytes con firma MZ. La prueba valida el recorrido; no pretende verificar el archivo PE completo.',
			facts: ['LBA 2048', 'Clúster 207', 'AHCI → GPT → FAT32']
		},
		{
			index: '06',
			title: 'C deja de vivir dentro del kernel',
			image: '/images/bmo-x/06-c-from-estratos.png',
			width: 890,
			height: 562,
			alt: 'BMO-X cargando apps/hola.bex desde ESTRATOS y ejecutando el programa C como tarea',
			status: 'BEX cargado desde disco',
			description:
				'El comando run lee apps/hola.bex, verifica el contenido, lo admite como TID 7 y el scheduler lo ejecuta en el siguiente tick. Cambiar la aplicación ya no exige recompilar y embeberla dentro del kernel.',
			facts: ['12.00 KiB', 'TID 7', 'C termina correctamente']
		},
		{
			index: '07',
			title: 'El primer estrato ya nace en el disco',
			image: '/images/bmo-x/07-estratos-mounted.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X montando ESTRATOS generación 1 y listando su directorio raíz',
			status: 'ESTRATOS v1 · lectura funcional',
			description:
				'El kernel encuentra el volumen por su magia, elige un superbloque válido, contrasta la identidad física y sigue el estrato “BMO-DATA nace” hasta listar apps, docs y leeme.txt desde su raíz.',
			facts: ['Generación 1', 'Log en bloque 24', 'Identidad coincide']
		},
		{
			index: '08',
			title: 'COBOL también llega desde ESTRATOS',
			image: '/images/bmo-x/08-cobol-from-estratos.png',
			width: 718,
			height: 476,
			alt: 'BMO-X leyendo apps/COBOL.bex desde ESTRATOS y ejecutando decimal exacto',
			status: 'Lenguaje → archivo → proceso',
			description:
				'La imagen COBOL ya no se limita al payload embebido de las primeras pruebas: aparece como apps/COBOL.bex, con origen ESTRATOS, lectura de 5.02 KiB, admisión independiente y la misma lógica decimal correcta.',
			facts: ['Origen ESTRATOS', '5.02 KiB', '59.97 exacto']
		},
		{
			index: '09',
			title: 'El silicio corrige al perfil',
			image: '/images/bmo-x/09-xsave-ring3-gate.png',
			width: 1599,
			height: 899,
			alt: 'Diagnóstico de BMO-X comparando el área XSAVE real del Ryzen con el perfil estático',
			status: 'Hardening de contexto Ring 3',
			description:
				'La captura registra el hallazgo: FXSAVE no preservaba el estado AVX completo. El código posterior usa XSAVE/XRSTOR, reserva el tamaño informado por CPUID y ya fue confirmado nuevamente sobre hardware.',
			facts: ['CPUID manda', 'AVX detectado', 'Hallazgo corregido después']
		},
		{
			index: '10',
			title: 'COBOL produce una línea bancaria completa',
			image: '/images/bmo-x/10-cobol-extracto-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X ejecutando apps/extracto.bex y mostrando saldo, talón protegido y cuenta en descubierto',
			status: 'Semántica financiera en hardware',
			description:
				'El programa extracto.bex se lanza desde la interfaz de Ring 3 y produce formato monetario, protección con asteriscos, saldo negativo con CR y una decisión de descubierto. Los importes son datos de demostración; la aritmética y el formato sí son ejecutados.',
			facts: ['PIC monetaria', 'IF de descubierto', 'BEX · Ring 3 · Ryzen']
		},
		{
			index: '11',
			title: 'Ada se convierte en el tercer lenguaje nativo',
			image: '/images/bmo-x/11-ada-cierre-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X ejecutando apps/cierre.bex generado por el frontend propio de Ada',
			status: 'Ada ejecutado en hardware',
			description:
				'El frontend BMO Ada genera cierre.bex sin GNAT ni runtime de Ada. En Ring 3, un tipo decimal con delta 0.01 suma tres cuotas hasta 59.97, resta una devolución y muestra 39.98 mediante la misma puerta de consola.',
			facts: ['20/20 tests', '5,112 B', 'Ada · BEF · Ring 3']
		},
		{
			index: '12',
			title: 'El cierre batch vuelve desde el disco',
			image: '/images/bmo-x/12-batch-cierre-read-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X leyendo apps/cierre.txt y mostrando el total batch 1135.00',
			status: 'Resultado batch observado en hardware',
			description:
				'La interfaz de Ring 3 abre apps/cierre.txt y recupera 1135.00, el total esperado por las pruebas del batch COBOL. La captura acredita lectura física del resultado; una lectura después de reiniciar cerrará la prueba específica de persistencia.',
			facts: ['apps/cierre.txt', '1,135.00 exacto', 'Reinicio: siguiente prueba']
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
					resultado se valida y obtiene autoridad para ejecutarse. El modelo actual es AOT puro:
					cada frontend produce código nativo antes de entrar al sistema, sin JIT durante la
					ejecución.
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
						BEF empaqueta el resultado de C, Ada y COBOL. BMO verifica el contenedor, asigna
						capabilities y coordina su ejecución nativa sin obligarlos a compartir semántica.
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

			<div class="language-strategy" data-reveal>
				<header>
					<div class="card-label">ESTRATEGIA / MENOS LENGUAJES, MÁS UTILIDAD</div>
					<h3>No busco marcar casillas.<br /><em>Busco cubrir responsabilidades.</em></h3>
					<p>
						La meta no es anunciar compatibilidad total. Es construir perfiles esenciales, útiles y
						auditables que crezcan según problemas reales.
					</p>
				</header>
				<div class="language-grid">
					<article>
						<span>01 / CONTROL</span><b>C</b>
						<h4>Hablar cerca del hardware</h4>
						<p>
							Base para sistemas, drivers y herramientas. El perfil esencial ya ejecuta en metal,
							pero no se presenta como C completo.
						</p>
						<small>AMPLIO · AÚN EN DESARROLLO</small>
					</article>
					<article class="featured">
						<span>02 / CORRECCIÓN</span><b>ADA</b>
						<h4>Expresar reglas críticas</h4>
						<p>
							Tipos fuertes y decimal exacto para lógica donde los límites importan. El perfil
							inicial ya genera y ejecuta BEX nativo.
						</p>
						<small>20/20 TESTS · HARDWARE REAL</small>
					</article>
					<article>
						<span>03 / NEGOCIO</span><b>COBOL</b>
						<h4>Conservar la intención financiera</h4>
						<p>
							Decimal, PICTURE y procesamiento batch para reglas legibles por negocio. Es funcional,
							no una implementación completa del estándar.
						</p>
						<small>10–15% · CORTE VERTICAL REAL</small>
					</article>
				</div>
				<footer>
					<b>C++</b><span
						>Permanece como extensión selectiva futura; mejorar C aporta más valor inmediato que
						prometer otro frontend incompleto.</span
					>
				</footer>
			</div>

			<div class="bmo-details" data-reveal>
				<div class="architecture-card">
					<div class="card-label">DE UNA REGLA DE NEGOCIO AL HARDWARE</div>
					<div class="flow">
						<div>
							<small>01</small><b>C · ADA · COBOL</b><span>Cada frontend conserva su semántica</span
							>
						</div>
						<i>↓</i>
						<div>
							<small>02</small><b>BEF</b><span>Contenedor común con código y metadatos</span>
						</div>
						<i>↓</i>
						<div>
							<small>03</small><b>VERIFY + BEX</b><span
								>AOT nativo: validación y ejecutable antes de correr</span
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
					tiene lexer, parser, PIC propio, decimal exacto, archivos y salida BEF de extremo a
					extremo. En un Ryzen real ya ejecuta cálculo y presentación bancaria; el siguiente corte
					lee movimientos y escribe un cierre mediante capabilities. Eso no significa que todo COBOL
					esté implementado: records avanzados, FILE STATUS, más verbos, intrínsecas y un runtime
					mayor mantienen el frontend en aproximadamente 10–15%.
				</p>
				<div class="cobol-metrics">
					<div><b>10/10</b><span>pruebas de archivos</span></div>
					<div><b>556</b><span>palabras catalogadas</span></div>
					<div><b>10–15%</b><span>estado honesto</span></div>
				</div>
			</div>

			<div class="batch-feature" data-reveal>
				<div class="batch-copy">
					<div class="card-label">NUEVO CORTE / PROCESAMIENTO POR LOTES</div>
					<span class="batch-state"><i></i> RESULTADO LEÍDO EN HARDWARE · REINICIO PENDIENTE</span>
					<h3>Del movimiento diario<br /><em>al cierre auditable.</em></h3>
					<p>
						Un banco no vive de “Hola mundo”. Vive de procesos que reciben movimientos, los
						totalizan sin perder centavos y dejan un resultado verificable. <strong
							>batch.cob</strong
						> ya completa esa cadena en pruebas y genera un BEX válido de 6,224 bytes.
					</p>
					<div class="batch-result">
						<small>RESULTADO COMPROBADO</small>
						<b>1,000.00 + 234.56 + 0.44 − 100.00</b>
						<strong>$1,135.00</strong>
					</div>
				</div>
				<div class="batch-flow" aria-label="Flujo del procesamiento batch COBOL">
					<div><span>01</span><b>OPEN INPUT</b><small>apps/movim.txt</small></div>
					<i>↓</i>
					<div><span>02</span><b>READ · AT END</b><small>una línea por movimiento</small></div>
					<i>↓</i>
					<div><span>03</span><b>DECIMAL EXACTO</b><small>centavos · sin float</small></div>
					<i>↓</i>
					<div><span>04</span><b>WRITE + CLOSE</b><small>apps/cierre.txt</small></div>
					<footer><b>KIND_ARCHIVO</b><span>autoridad explícita · máximo actual 4 KiB</span></footer>
				</div>
			</div>

			<div class="ada-feature" data-reveal>
				<div class="ada-heading">
					<div class="card-label">TERCER LENGUAJE NATIVO / NUEVO FRONTEND</div>
					<span>BMO ADA · PERFIL INICIAL Y HONESTO</span>
					<h3>Una semántica distinta.<br /><em>El mismo contrato.</em></h3>
					<p>
						Ada no entra como una traducción de COBOL. Tiene lexer, parser y emisor propios; solo
						comparte BEF, el lowering opcional y las puertas de BMO-X. Su primer perfil admite un
						procedimiento aislado y rechaza explícitamente packages, genéricos y tareas todavía no
						implementados.
					</p>
					<ul>
						<li><b>20/20</b><span>pruebas correctas</span></li>
						<li><b>5,112 B</b><span>cierre.bex</span></li>
						<li><b>0</b><span>GNAT · runtime Ada</span></li>
					</ul>
				</div>
				<div class="ada-code" aria-label="Fragmento real del primer programa BMO Ada">
					<header><span></span><span></span><span></span><small>cierre.adb</small></header>
					<pre><code
							><b>type</b> Saldo <b>is delta</b> 0.01 <b>digits</b> 12;

Total  : Saldo := 0.00;
Cuota  : Saldo := 19.99;

<b>while</b> Vueltas &lt; 3 <b>loop</b>
   Total := Total + Cuota;
   Vueltas := Vueltas + 1;
<b>end loop</b>;

Put_Line(Total);  <i>-- 59.97</i>
Total := Total - 19.99;
Put_Line(Total);  <i>-- 39.98</i></code
						></pre>
					<footer>
						<span>ADA SOURCE</span><i>→</i><span>BEF/BEX</span><i>→</i><span>RING 3</span>
					</footer>
				</div>
			</div>

			<div class="cobol-source" data-reveal>
				<div class="source-heading">
					<div class="card-label">CINCO FUENTES / UNA PROGRESIÓN VERIFICABLE</div>
					<h3>No escribí una demostración vacía.<br /><i>Escribí reglas que pueden fallar.</i></h3>
					<p>
						Cada ejemplo añade una responsabilidad: hablar, calcular, integrar, presentar una línea
						bancaria y finalmente procesar archivos. La última etapa permanece marcada como
						pendiente de validación física.
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
					<div class="section-kicker light">
						<span>证</span> DOCE CAPTURAS / UNA EVOLUCIÓN REAL
					</div>
					<h3>Lo que afirmo<br /><i>se puede observar.</i></h3>
				</div>
				<p>
					La secuencia conecta lenguaje, procesos, privilegios, FAT32, ESTRATOS y depuración de
					contexto en el mismo sistema sobre hardware físico. También conserva los estados
					intermedios.
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
						Fuente COBOL → BEX → nodo ESTRATOS → BLAKE3 → admisión → proceso Ring 3 → INVOKE → Ring
						0 → salida en hardware real, además de la misma ruta de disco para C.
					</p>
				</div>
				<div>
					<span>TODAVÍA NO AFIRMA</span>
					<p>
						Compatibilidad COBOL completa, autenticidad criptográfica, escritura transaccional
						ESTRATOS, rollback productivo o un escritorio terminado.
					</p>
				</div>
			</div>

			<section class="strata-feature" aria-labelledby="strata-title">
				<div class="strata-intro" data-reveal>
					<div>
						<div class="section-kicker light">
							<span>层</span> ARQUITECTURA EN DESARROLLO / TIMEBACK
						</div>
						<p class="strata-status"><i></i> Lectura funcional · escritura en desarrollo</p>
					</div>
					<h3 id="strata-title">ESTRATOS</h3>
					<p class="strata-lead">
						BMO-X ya monta y recorre su propio formato en hardware.
						<strong>El siguiente paso es escribir sin destruir.</strong>
					</p>
				</div>

				<div class="strata-concept" data-reveal>
					<div
						class="strata-visual"
						aria-label="Recorrido de lectura verificado de ESTRATOS en hardware real"
					>
						<div class="stratum stratum-four">
							<span>04</span><b>BEX EJECUTADO</b><small>C + COBOL · RING 3</small><i></i>
						</div>
						<div class="stratum stratum-three">
							<span>03</span><b>RUTA RESUELTA</b><small>apps/COBOL.bex</small><i></i>
						</div>
						<div class="stratum stratum-two">
							<span>02</span><b>NODO LEÍDO</b><small>:datos + :firma BLAKE3</small><i></i>
						</div>
						<div class="stratum stratum-one">
							<span>01</span><b>VOLUMEN MONTADO</b><small>generación 1 · hardware</small><i></i>
						</div>
						<div class="strata-axis"><span>RECORRIDO VERIFICADO</span><i></i></div>
					</div>

					<div class="strata-story">
						<div class="card-label">HOY / LECTURA VERIFICADA</div>
						<h4>Del volumen al programa.<br /><i>Un recorrido real, no una simulación.</i></h4>
						<p>
							Hoy el kernel valida superbloques, la identidad física del volumen, hashes BLAKE3,
							estratos, nodos, atributos y rutas antes de admitir un BEX desde el SSD.
						</p>
						<div class="card-label">SIGUIENTE / ESCRITURA TRANSACCIONAL</div>
						<p>
							La siguiente fase hará que una escritura publique una raíz nueva sin destruir la
							anterior. Ese historial todavía está en desarrollo.
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
							Bloques, nodos y raíces ya se comprueban con BLAKE3 al leer. Si un puntero no coincide
							con su contenido, CABINA lo trata como corrupción y detiene el recorrido.
						</p>
					</article>
					<article>
						<span>02 / TRAZABILIDAD</span>
						<h4>Conservar procedencia</h4>
						<p>
							Un BEX ya mantiene juntos `:datos` y su hash `:firma`. Manifiesto de capabilities,
							procedencia firmada y autoría criptográfica continúan como ampliaciones previstas.
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
							El nodo actual ya une datos y hash BLAKE3 para comprobar integridad antes de admitir
							un BEX. Manifiesto y procedencia muestran la extensión prevista del mismo modelo.
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
							<p>Integridad implementada · no autoría</p>
							<i>BLAKE3</i>
						</div>
						<div>
							<span>:manifiesto</span>
							<p>Capabilities solicitadas · previsto</p>
							<i>FUTURO</i>
						</div>
						<div>
							<span>:origen</span>
							<p>Fuente, herramienta y momento · previsto</p>
							<i>FUTURO</i>
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
						<li class="done">
							<b>01</b><span>Base física</span><small>AHCI, sectores y GPT ya observables</small>
						</li>
						<li class="done">
							<b>02</b><span>FAT32 + identidad</span><small>rutas leídas y disco contrastado</small>
						</li>
						<li class="done">
							<b>03</b><span>Capa de bloques</span><small>ESTRATOS ya no habla con SATA</small>
						</li>
						<li class="done">
							<b>04</b><span>ESTRATOS lectura</span><small>montaje, rutas y BEX en hardware</small>
						</li>
						<li class="active">
							<b>05</b><span>Escritura</span><small>siguiente: log, barreras y raíz alterna</small>
						</li>
						<li>
							<b>06</b><span>GC + TimeBack</span><small>retención, diff y recuperación</small>
						</li>
					</ol>
				</div>

				<div class="strata-honesty" data-reveal>
					<strong>ESTADO HONESTO / JULIO 2026</strong>
					<p>
						<strong>ESTRATOS v1 ya es un sistema de ficheros legible por BMO-X:</strong> monta desde hardware,
						contrasta identidad, verifica BLAKE3, recorre rutas y carga BEX de C y COBOL. Sigue siendo
						solo lectura desde el kernel; escritura, múltiples generaciones, GC, rollback y autenticidad
						criptográfica todavía no están terminados.
					</p>
					<span>LECTURA REAL · ESCRITURA PENDIENTE</span>
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
					<div class="section-kicker light"><span>证</span> CÓDIGO PÚBLICO / TRABAJO REVISABLE</div>
					<h2>No tiene que creerme.<br /><i>Puede revisar el trabajo.</i></h2>
				</div>
				<div class="github-profile-card">
					<span class="github-mark" aria-hidden="true">&lt;/&gt;</span>
					<div>
						<small>GITHUB.COM</small><b>@AndreeSalazar</b>
						<p>Código fuente · historial · documentación</p>
					</div>
					<a href="https://github.com/AndreeSalazar" target="_blank" rel="noreferrer"
						>Abrir perfil ↗</a
					>
				</div>
			</div>

			<div class="public-proof" data-reveal>
				<div class="proof-summary">
					<strong>43</strong>
					<span>repositorios públicos para inspeccionar</span>
					<p>
						No todos tienen la misma madurez. Estos cuatro resumen una práctica constante: entender
						problemas difíciles y convertirlos en sistemas que otras personas pueden abrir y
						revisar.
					</p>
				</div>
				<div class="proof-repos">
					<a href="https://github.com/AndreeSalazar/ADead-BIB" target="_blank" rel="noreferrer"
						><span>COMPILADOR</span><b>ADead-BIB</b>
						<p>Convierte código C en programas ejecutables y mantiene visible cada etapa.</p>
						<small>RUST · C99 · PE/ELF</small><i>↗</i></a
					>
					<a href="https://github.com/AndreeSalazar/ASM-BIB" target="_blank" rel="noreferrer"
						><span>HERRAMIENTAS</span><b>ASM-BIB</b>
						<p>Ensambla, organiza y enlaza las piezas necesarias para formar un ejecutable.</p>
						<small>ASSEMBLER · COFF · PE</small><i>↗</i></a
					>
					<a
						href="https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-"
						target="_blank"
						rel="noreferrer"
						><span>GRÁFICOS</span><b>REACTOR</b>
						<p>
							Ordena la complejidad de Vulkan para construir sin repetir toda su infraestructura.
						</p>
						<small>RUST · VULKAN</small><i>↗</i></a
					>
					<a href="https://github.com/AndreeSalazar/GPU-Driven" target="_blank" rel="noreferrer"
						><span>CÓMPUTO</span><b>GPU-Driven</b>
						<p>Mueve simulaciones masivas a la GPU para estudiar escala y rendimiento medible.</p>
						<small>RUST · WGPU</small><i>↗</i></a
					>
				</div>
			</div>

			<div class="proof-disclosure" data-reveal>
				<span>QUÉ PUEDE COMPROBAR</span>
				<p>
					Los cuatro proyectos enlazados se pueden inspeccionar directamente en GitHub. BMO-X, BEF,
					BMO C, Ada y COBOL se documentan aquí con pruebas y capturas locales, pero todavía no se
					presentan como repositorios públicos.
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
