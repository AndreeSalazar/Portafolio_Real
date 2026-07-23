<script lang="ts">
	const projects = [
		{
			index: '02',
			name: 'ADead-BIB v8.0',
			type: 'Compilador C / C++',
			purpose:
				'Entender y controlar todo el recorrido que convierte código humano en un programa ejecutable.',
			description:
				'Construido desde sus fundamentos, sin delegar el núcleo a herramientas externas. Convierte una especificación compleja en etapas pequeñas, verificables y medibles.',
			value:
				'Demuestra arquitectura a gran escala, constancia y dominio del ciclo completo de compilación.',
			metric: '354K+',
			metricLabel: 'líneas propias',
			tags: ['C', 'C++', 'x86-64', 'Custom IR']
		},
		{
			index: '03',
			name: 'FastOS v4.0',
			type: 'Sistema operativo compacto',
			purpose:
				'Explorar cuánto puede simplificarse un sistema operativo sin perder aislamiento ni control.',
			description:
				'Un sistema modular que arranca desde un bootloader de 512 bytes y mantiene su núcleo en 64 KB. Cada componente tiene una responsabilidad clara.',
			value:
				'Demuestra criterio para trabajar con recursos limitados y tomar decisiones de diseño conscientes.',
			metric: '64 KB',
			metricLabel: 'kernel',
			tags: ['C99', 'Kernel', 'MBR', 'Bare metal']
		},
		{
			index: '04',
			name: 'PyDead-BIB v4.0',
			type: 'Acelerador experimental para Python',
			purpose:
				'Investigar cómo reducir el tiempo entre escribir código Python y ejecutarlo directamente en el procesador.',
			description:
				'Prototipo que traduce Python a instrucciones nativas. El objetivo no es reemplazar Python, sino estudiar dónde están sus costos y qué capas pueden eliminarse.',
			value:
				'Demuestra experimentación orientada por métricas y capacidad para cruzar lenguajes con hardware.',
			metric: '0.305 ms',
			metricLabel: 'arranque medido',
			tags: ['Python', 'JIT', 'Assembly', 'R&D']
		},
		{
			index: '05',
			name: 'REACTOR',
			type: 'Framework para aprovechar la GPU',
			purpose:
				'Hacer accesible la potencia de la GPU sin repetir cientos de líneas de configuración compleja.',
			description:
				'Organiza la complejidad de Vulkan para que el trabajo se concentre en render, simulación y cómputo, no en configuración repetitiva. La investigación asociada llegó a renderizar un millón de entidades a 75 FPS en una RTX 3060.',
			value:
				'Demuestra capacidad para convertir APIs difíciles en herramientas más claras y productivas.',
			metric: '98%',
			metricLabel: 'menos código repetitivo',
			tags: ['Vulkan', 'GPU', 'Compute', 'C++']
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
		['Boot chain UEFI', 'Validado en hardware', 'done'],
		['Kernel Ring 0', 'Estable', 'done'],
		['Userspace Ring 3', 'Ejecutando', 'done'],
		['Aislamiento de fallos', 'Implementado', 'done'],
		['USB xHCI + HID', 'Enumera; input por cablear', 'progress'],
		['Frontend BMO COBOL', 'Base sólida · ≈15%', 'progress'],
		['Desktop / compositor', 'Próximo frente', 'planned']
	];

	let menuOpen = $state(false);
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
		<section class="hero" id="inicio">
			<div class="hero-grid" aria-hidden="true"></div>
			<div class="vertical-mark" aria-hidden="true">
				<span>大道至简</span><small>EL GRAN CAMINO ES SIMPLE</small>
			</div>

			<div class="hero-copy">
				<p class="eyebrow"><span></span> Lima, Perú · R&D independiente</p>
				<h1>
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

		<section class="statement section-pad" id="perfil">
			<div class="section-kicker"><span>序</span> PERFIL / 2019—PRESENTE</div>
			<div class="statement-grid">
				<h2>No solo programo.<br /><i>Entiendo el porqué.</i></h2>
				<div>
					<p class="large-copy">
						Me especializo en problemas donde no basta con conectar herramientas: hay que entender
						qué ocurre debajo, decidir bien los límites y construir una base confiable.
					</p>
					<p>
						Desde 2019 mantengo un laboratorio independiente con más de 50 repositorios. No son solo
						demostraciones: son una forma sostenida de aprender, validar ideas y enfrentar proyectos
						que exigen paciencia, diseño y responsabilidad de extremo a extremo.
					</p>
				</div>
			</div>

			<div class="numbers" aria-label="Métricas destacadas">
				<div><strong>6<sup>+</sup></strong><span>Años de I+D<br />independiente</span></div>
				<div><strong>50<sup>+</sup></strong><span>Repositorios<br />de sistemas</span></div>
				<div><strong>354<sup>K</sup></strong><span>Líneas en<br />ADead-BIB</span></div>
				<div><strong>24.1</strong><span>TFLOPS pico<br />en GPU</span></div>
			</div>
		</section>

		<section class="value-section section-pad" id="valor">
			<div class="value-heading">
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

			<div class="strength-grid">
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

			<div class="role-fit">
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
			<div class="bmo-head">
				<div>
					<div class="section-kicker light"><span>壹</span> PROYECTO PRINCIPAL / EN DESARROLLO</div>
					<h2>BMO-X</h2>
					<p class="bmo-subtitle">Bare Metal Orchestrator</p>
				</div>
				<div class="status-badge"><i></i> Arranca en hardware real</div>
			</div>

			<div class="bmo-intro">
				<p class="bmo-quote">
					Una plataforma propia para ejecutar software con <em>menos intermediarios</em> y reglas más
					simples.
				</p>
				<p>
					BMO-X es mi proyecto principal: un sistema operativo y un conjunto de compiladores que
					investigan una pregunta concreta: ¿podemos construir una base pequeña, segura y estable
					para que lenguajes como C, C++ y COBOL lleguen directamente al hardware?
				</p>
			</div>

			<div class="bmo-why">
				<article>
					<span>EL PROBLEMA</span>
					<h3>Demasiadas capas que cambian</h3>
					<p>
						Los sistemas acumulan interfaces, dependencias y costos difíciles de ver. Mantenerlos y
						razonar sobre ellos se vuelve cada vez más complejo.
					</p>
				</article>
				<article class="featured">
					<span>POR QUÉ EXISTE</span>
					<h3>Una base pequeña y estable</h3>
					<p>
						BMO-X reduce la entrada al sistema a tres operaciones. Todo lo demás crece como
						capacidades explícitas, sin cambiar la base.
					</p>
				</article>
				<article>
					<span>PARA QUÉ SIRVE</span>
					<h3>Software nativo y controlable</h3>
					<p>
						El objetivo es compilar programas —incluido COBOL— a un formato propio, verificable y
						ejecutable directamente sobre BMO-X.
					</p>
				</article>
			</div>

			<div class="technical-divider"><span>LA IDEA TÉCNICA, EN UNA SOLA LÍNEA</span></div>
			<div class="syscall-strip">
				<div><span>01</span><b>INVOKE</b><small>Pedir una operación</small></div>
				<div><span>02</span><b>CHANNEL_KICK</b><small>Avisar que hay trabajo</small></div>
				<div><span>03</span><b>WAIT</b><small>Esperar sin desperdiciar recursos</small></div>
			</div>

			<div class="bmo-details">
				<div class="architecture-card">
					<div class="card-label">ARQUITECTURA / FLUJO NATIVO</div>
					<div class="flow">
						<div><small>01</small><b>C · C++ · COBOL</b><span>Frontends de lenguaje</span></div>
						<i>↓</i>
						<div><small>02</small><b>BEF → BEX</b><span>Formato y ejecutable nativo</span></div>
						<i>↓</i>
						<div><small>03</small><b>BMO ABI</b><span>Capabilities + 3 puertas</span></div>
						<i>↓</i>
						<div class="accent">
							<small>04</small><b>HARDWARE</b><span>Ryzen 5 5600X · x86-64</span>
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

			<div class="cobol-callout">
				<div class="cobol-title">
					<span>FOCO ACTUAL / MODERNIZACIÓN</span>
					<h3>BMO COBOL</h3>
				</div>
				<p>
					COBOL todavía sostiene procesos financieros y administrativos esenciales. Este frontend
					busca conservar su precisión decimal y permitir que esos programas se conviertan en
					software nativo de BMO-X, sin traducir primero a otro lenguaje. La base funciona; el
					lenguaje completo sigue en construcción.
				</p>
				<div class="cobol-metrics">
					<div><b>32</b><span>tests verdes</span></div>
					<div><b>556</b><span>palabras catalogadas</span></div>
					<div><b>≈15%</b><span>estado del frontend</span></div>
				</div>
			</div>

			<p class="evidence-note">
				<span>NOTA DE INGENIERÍA</span> Estados y métricas basados en pruebas sobre hardware real y documentación
				interna del proyecto. Las capacidades planificadas se señalan como tales.
			</p>
		</section>

		<section class="projects section-pad" id="proyectos">
			<div class="projects-head">
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
					<article class="project-row">
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
							<span class="case-label">CASO DE INGENIERÍA / {project.index}</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="expertise section-pad">
			<div class="section-kicker light"><span>器</span> CAPACIDADES / EN CONTEXTO</div>
			<div class="expertise-grid">
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
			<div class="method-track">
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
			<div class="credentials-grid">
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
			<h2>¿Tu equipo enfrenta un<br /><i>problema difícil?</i></h2>
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
