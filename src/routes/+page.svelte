<script lang="ts">
	const projects = [
		{
			index: '02',
			name: 'ADead-BIB v8.0',
			type: 'Infraestructura de compilador C / C++',
			description:
				'Compilador construido desde sus fundamentos: análisis, IR propio y emisión binaria PE/ELF sin delegar el núcleo a LLVM o GCC.',
			metric: '354K+',
			metricLabel: 'líneas propias',
			tags: ['C', 'C++', 'x86-64', 'Custom IR']
		},
		{
			index: '03',
			name: 'FastOS v4.0',
			type: 'Sistema operativo modular',
			description:
				'Kernel compacto en C99 con bootloader MBR, paging, scheduling preventivo y separación de privilegios Ring 0 / Ring 3.',
			metric: '64 KB',
			metricLabel: 'kernel',
			tags: ['C99', 'Kernel', 'MBR', 'Bare metal']
		},
		{
			index: '04',
			name: 'PyDead-BIB v4.0',
			type: 'Python JIT experimental',
			description:
				'Prototipo de traducción de Python a código máquina x86-64 nativo, orientado a reducir capas y estudiar ejecución sin GIL.',
			metric: '0.305 ms',
			metricLabel: 'arranque medido',
			tags: ['Python', 'JIT', 'Assembly', 'R&D']
		},
		{
			index: '05',
			name: 'REACTOR',
			type: 'Framework de cómputo Vulkan',
			description:
				'Capa de ingeniería para simplificar la configuración de Vulkan y concentrar el trabajo en render y cómputo GPU.',
			metric: '24.1',
			metricLabel: 'TFLOPS pico / RTX 3060',
			tags: ['Vulkan', 'GPU', 'Compute', 'C++']
		}
	];

	const skills = [
		{
			label: 'Lenguajes',
			value: 'Rust · C · C++ · x86-64 Assembly · Python'
		},
		{
			label: 'Sistemas',
			value: 'Kernels · UEFI / MBR · Paging · Schedulers · Ring 0/3'
		},
		{
			label: 'Compiladores',
			value: 'Lexing · Parsing · AST · SSA IR · PE / ELF · JIT'
		},
		{
			label: 'GPU & rendimiento',
			value: 'Vulkan · DX12 · CUDA · wgpu · AVX2 · SSE4.2 · BMI2'
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
			<a href="#bmo" onclick={() => (menuOpen = false)}>BMO-X</a>
			<a href="#proyectos" onclick={() => (menuOpen = false)}>Proyectos</a>
			<a href="#perfil" onclick={() => (menuOpen = false)}>Perfil</a>
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
					Construyo sistemas<br />
					desde el <em>primer byte.</em>
				</h1>
				<p class="hero-lead">
					Ingeniero de software de sistemas y arquitecto. Diseño compiladores, kernels y motores de
					cómputo donde el control, la precisión y el rendimiento son parte de la arquitectura.
				</p>
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
				<h2>Menos capas.<br />Más <i>control.</i></h2>
				<div>
					<p class="large-copy">
						Mi trabajo explora lo que ocurre debajo de las abstracciones modernas: desde el boot y
						la memoria virtual hasta la generación de código nativo y el cómputo paralelo.
					</p>
					<p>
						Como arquitecto independiente, mantengo un laboratorio de más de 50 repositorios de
						software de bajo nivel. Cada proyecto busca convertir teoría de sistemas en artefactos
						medibles, depurables y ejecutables.
					</p>
				</div>
			</div>

			<div class="numbers" aria-label="Métricas destacadas">
				<div><strong>50<sup>+</sup></strong><span>Repositorios<br />de sistemas</span></div>
				<div><strong>354<sup>K</sup></strong><span>Líneas en<br />ADead-BIB</span></div>
				<div><strong>24.1</strong><span>TFLOPS pico<br />en GPU</span></div>
				<div><strong>512<sup>B</sup></strong><span>Bootloader<br />experimental</span></div>
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
					Un sistema operativo bare metal en Rust con un microkernel de capabilities y una
					superficie congelada de <em>tres syscalls.</em>
				</p>
				<p>
					BMO-X investiga cómo reducir una plataforma completa a contratos pequeños y estables. El
					sistema ejecuta Ring 0 y Ring 3 en una MSI A320M PRO MAX con Ryzen 5 5600X, y acompaña el
					kernel con un toolchain propio para llevar C, C++ y COBOL a binarios nativos.
				</p>
			</div>

			<div class="syscall-strip">
				<div><span>0x00</span><b>INVOKE</b><small>Llamada síncrona</small></div>
				<div><span>0x01</span><b>CHANNEL_KICK</b><small>Notificación asíncrona</small></div>
				<div><span>0x02</span><b>WAIT</b><small>Espera bloqueante</small></div>
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
					<span>FOCO ACTUAL</span>
					<h3>BMO COBOL</h3>
				</div>
				<p>
					Un frontend nativo con aritmética decimal exacta guiada por PIC. El pipeline Source →
					Lexer → Parser → AST → Codegen → BEF ya funciona; records avanzados, verbos, intrínsecas y
					runtime siguen en construcción.
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
					Investigación aplicada en compilación, sistemas operativos y cómputo de alto rendimiento.
				</p>
			</div>

			<div class="project-list">
				{#each projects as project (project.name)}
					<article class="project-row">
						<div class="project-index">{project.index}</div>
						<div class="project-main">
							<p>{project.type}</p>
							<h3>{project.name}</h3>
							<div class="tags">
								{#each project.tags as tag (tag)}<span>{tag}</span>{/each}
							</div>
						</div>
						<p class="project-description">{project.description}</p>
						<div class="project-metric">
							<b>{project.metric}</b><span>{project.metricLabel}</span>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="expertise section-pad">
			<div class="section-kicker light"><span>器</span> CAPACIDADES TÉCNICAS</div>
			<div class="expertise-grid">
				<div>
					<h2>Ingeniería cerca<br />del <i>metal.</i></h2>
					<p>
						Trabajo donde las decisiones de arquitectura son visibles en memoria, instrucciones,
						latencia y binarios.
					</p>
				</div>
				<div class="skill-list">
					{#each skills as skill, i (skill.label)}
						<div>
							<span>0{i + 1}</span><b>{skill.label}</b>
							<p>{skill.value}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="credentials section-pad">
			<div class="credentials-grid">
				<div>
					<div class="section-kicker"><span>学</span> FORMACIÓN</div>
					<h2>Aprendizaje continuo,<br /><i>práctica rigurosa.</i></h2>
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
							<h3>Data Engineering with Rust</h3>
							<p>Coursera · Formación especializada</p>
						</div>
					</div>
					<div class="timeline-item">
						<span>CERT.</span>
						<div>
							<h3>C · C++ · Rust</h3>
							<p>Formación técnica y certificaciones</p>
						</div>
					</div>
					<div class="timeline-item">
						<span>CERT.</span>
						<div>
							<h3>Angular · Java · Python</h3>
							<p>Desarrollo y análisis de datos</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="contact section-pad" id="contacto">
			<div class="contact-character" aria-hidden="true">合</div>
			<div class="section-kicker light"><span>信</span> CONTACTO</div>
			<h2>Construyamos algo que<br /><i>merezca existir.</i></h2>
			<p>
				Disponible para conversaciones sobre ingeniería de sistemas, compiladores, kernels,
				arquitectura de bajo nivel y colaboraciones de I+D.
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
