// Español — la versión de referencia. `en.ts` está tipado contra este objeto,
// así que si aquí se añade una clave, TypeScript exige la traducción inglesa.
// Los kanji decorativos y los nombres propios (BMO-X, BEF/BEX, Ring 3, PICTURE)
// no se traducen: son los mismos en las dos versiones.

export const es = {
	lang: 'es',
	locale: 'es_PE',
	// Etiqueta del botón que lleva a la OTRA versión, escrita en la otra lengua:
	// quien no lee español tiene que reconocerla sin entender la página.
	switchTo: 'English',
	switchToLabel: 'Read this page in English',

	meta: {
		title: 'Eddi Andreé Salazar — Systems Software Engineer',
		description:
			'Portafolio de Eddi Andreé Salazar Matos, ingeniero de software de sistemas y arquitecto de sistemas especializado en kernels, compiladores y cómputo GPU.',
		ogTitle: 'Eddi Andreé Salazar — Systems Software Engineer',
		ogDescription:
			'Compiladores, sistemas operativos y cómputo de bajo nivel construidos desde sus fundamentos.',
		ogImageAlt: 'El escritorio de BMO-X corriendo en Ring 3 sobre un AMD Ryzen 5 5600X real.'
	},

	nav: {
		home: 'Volver al inicio',
		main: 'Navegación principal',
		openMenu: 'Abrir menú',
		role: 'Systems Engineer',
		value: 'Lo que aporto',
		bmo: 'BMO-X',
		projects: 'Proyectos',
		contact: 'Contacto',
		github: 'GitHub ↗'
	},

	hero: {
		sealCaption: 'EL GRAN CAMINO ES SIMPLE',
		eyebrow: 'Lima, Perú · R&D independiente',
		titleA: 'Convierto complejidad',
		titleB: 'en sistemas',
		titleEm: 'claros.',
		lead: 'Soy Eddi Salazar, ingeniero de software de sistemas. Construyo tecnología desde sus fundamentos para crear soluciones rápidas, controlables y capaces de crecer sin convertirse en una caja negra.',
		proofLabel: 'Resumen profesional',
		proof: ['Arquitectura de sistemas', 'Compiladores y lenguajes', 'Rendimiento y hardware'],
		ctaPrimary: 'Explorar BMO-X',
		ctaGhost: 'Ver trabajo seleccionado',
		asideCount: '01 / 05',
		asideLabel: 'Proyecto destacado',
		scroll: 'Desplazar para explorar'
	},

	profile: {
		kicker: 'PERFIL / 2019—PRESENTE',
		titleA: 'No solo programo.',
		titleEm: 'Entiendo el porqué.',
		large:
			'Me especializo en problemas donde no basta con conectar herramientas: hay que entender qué ocurre debajo, decidir bien los límites y construir una base confiable.',
		body: 'Desde 2019 mantengo un laboratorio independiente con 45 repositorios públicos. No son solo demostraciones: son una forma sostenida de aprender, validar ideas y enfrentar proyectos que exigen paciencia, diseño y responsabilidad de extremo a extremo.',
		numbersLabel: 'Métricas destacadas',
		// Dos líneas en vez de un `<br />` dentro del texto: así el diccionario no
		// lleva markup y la plantilla no necesita {@html} para pintarlo.
		numbers: [
			{ value: '6', sup: '+', line1: 'Años de I+D', line2: 'independiente' },
			{ value: '45', sup: '', line1: 'Repositorios', line2: 'públicos' },
			{ value: '41', sup: '', line1: 'Casos C visibles', line2: 'en ADead-BIB' },
			{ value: '544', sup: '', line1: 'Tests críticos', line2: 'verificados ahora' }
		]
	},

	value: {
		kicker: 'LO QUE APORTO A UN EQUIPO',
		titleA: 'Profundidad técnica',
		titleB: 'con',
		titleEm: 'criterio de producto.',
		noteLabel: 'EN UNA FRASE',
		note: 'Un ingeniero para problemas difíciles, capaz de investigar lo desconocido, explicar sus decisiones y convertirlas en software real.',
		strengths: [
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
		],
		fitLabel: 'PUEDO APORTAR ESPECIALMENTE EN',
		fit: ['Ingeniería de sistemas', 'Compiladores', 'Plataformas', 'Rendimiento', 'I+D aplicada']
	},

	bmo: {
		kicker: 'PROYECTO PRINCIPAL / EN DESARROLLO',
		subtitle: 'Bare Metal Orchestrator · Meta-Kernel',
		badge: 'Validado en hardware real · no QEMU',
		repoLink: 'Repositorio público',
		quoteA: 'No es un OS tradicional. Es un',
		quoteEm: 'meta-kernel',
		quoteB: 'que organiza ejecución, autoridad y formatos desde el metal.',
		intro:
			'BMO significa Bare Metal Orchestrator. No intenta copiar Windows o Linux función por función: arranca el hardware, aplica capabilities, ofrece tres puertas estables y coordina contenedores BEF. Cada lenguaje conserva su frontend y su semántica; BMO controla cómo el resultado se valida y obtiene autoridad para ejecutarse. El modelo actual es AOT puro: cada frontend produce código nativo antes de entrar al sistema, sin JIT durante la ejecución.',
		why: [
			{
				label: 'EL PROBLEMA',
				title: 'Lógica crítica atrapada en capas opacas',
				text: 'En banca, una regla COBOL puede seguir siendo correcta después de décadas, pero ejecutarla depende de plataformas difíciles de reemplazar, inspeccionar y aislar.'
			},
			{
				label: 'POR QUÉ EXISTE',
				title: 'Una base estrecha que pueda auditarse',
				text: 'BMO reduce la entrada al meta-kernel a tres operaciones. Menos puertas fundamentales significan menos contratos que revisar, probar y mantener estables.'
			},
			{
				label: 'PARA QUÉ SIRVE',
				title: 'Un contenedor común, no un lenguaje único',
				text: 'BEF empaqueta el resultado de C, Ada y COBOL. BMO verifica el contenedor, asigna capabilities y coordina su ejecución nativa sin obligarlos a compartir semántica.'
			}
		],
		impactLabel: 'PERSPECTIVA DE UN GERENTE BANCARIO',
		impactTitle: 'No evaluaría “un kernel”. Evaluaría control, trazabilidad y riesgo.',
		impactText:
			'El interés práctico de BMO-X es separar la regla del lenguaje, el contenedor ejecutable y la autoridad del sistema. Así, una auditoría podría preguntar por separado: qué hace el programa, qué contiene el BEF y qué permisos recibió al ejecutarse.',
		impact: [
			{
				title: 'Modernización sin perder precisión',
				text: 'Explora cómo llevar lógica COBOL a una plataforma nueva conservando el comportamiento decimal que exigen los procesos financieros.'
			},
			{
				title: 'Menor superficie de cambio',
				text: 'Tres puertas estables reducen el número de contratos fundamentales que deben mantenerse, probarse y protegerse.'
			},
			{
				title: 'Autoridad explícita',
				text: 'El modelo de capabilities busca que cada programa reciba solo los permisos que necesita, haciendo más visible quién puede hacer qué.'
			}
		],
		honestyLabel: 'Estado honesto:',
		honestyText:
			'es una plataforma experimental de I+D, no un producto bancario listo para producción. Su valor actual está en la arquitectura validada, el aprendizaje acumulado y la capacidad de ejecución que demuestra.',
		syscallDivider: 'LA IDEA TÉCNICA, EN UNA SOLA LÍNEA',
		syscalls: [
			{ name: 'INVOKE', text: 'Pedir una operación' },
			{ name: 'CHANNEL_KICK', text: 'Avisar que hay trabajo' },
			{ name: 'WAIT', text: 'Esperar sin desperdiciar recursos' }
		],
		langLabel: 'ESTRATEGIA / MENOS LENGUAJES, MÁS UTILIDAD',
		langTitleA: 'No busco marcar casillas.',
		langTitleEm: 'Busco cubrir responsabilidades.',
		langLead:
			'La meta no es anunciar compatibilidad total. Es construir perfiles esenciales, útiles y auditables que crezcan según problemas reales.',
		languages: [
			{
				tag: '01 / CONTROL',
				name: 'C',
				title: 'Hablar cerca del hardware',
				text: 'Base para sistemas, drivers y herramientas. Ya cubre entrada, agregados, memoria, varargs, campos de bits y una libc esencial; sus capacidades se amplían por necesidad, no para fingir todo el estándar.',
				note: '238 TESTS · BASE EJECUTADA EN RYZEN'
			},
			{
				tag: '02 / CORRECCIÓN',
				name: 'ADA',
				title: 'Expresar reglas críticas',
				text: 'Tipos fuertes y decimal exacto para lógica donde los límites importan. El perfil inicial ya genera y ejecuta BEX nativo.',
				note: '20/20 TESTS · HARDWARE REAL'
			},
			{
				tag: '03 / NEGOCIO',
				name: 'COBOL',
				title: 'Conservar la intención financiera',
				text: 'Decimal, PICTURE, COMP-3, registros, COPYBOOK, FILE STATUS y procesamiento batch para reglas legibles por negocio. Es funcional, no una implementación completa del estándar.',
				note: '217 TESTS · BATCH EJECUTADO EN HARDWARE'
			}
		],
		langFooterLabel: 'C++ · I+D ACTIVA',
		langFooterText:
			'Ya emite BEX y ejecuta clases, RAII, sobrecarga, herencia simple y despacho virtual en 23 pruebas automatizadas. Sigue marcado como software sin estreno físico: no se presenta como C++ completo ni como ejecución confirmada en el Ryzen.',
		flowLabel: 'DE UNA REGLA DE NEGOCIO AL HARDWARE',
		flow: [
			{ name: 'C · ADA · COBOL', text: 'Cada frontend conserva su semántica' },
			{ name: 'BEF', text: 'Contenedor común con código y metadatos' },
			{ name: 'VERIFY + BEX', text: 'AOT nativo: validación y ejecutable antes de correr' },
			{ name: 'BMO META-KERNEL', text: 'Capabilities, aislamiento y tres puertas' },
			{ name: 'HARDWARE REAL', text: 'Ryzen 5 5600X · x86-64 · no QEMU' }
		],
		statusLabel: 'ESTADO VERIFICADO / AGOSTO 2026',
		status: [
			['Boot chain UEFI', 'Hardware real · no QEMU', 'done'],
			['Meta-kernel Ring 0', 'Capabilities estables', 'done'],
			['Userspace Ring 3', 'Probado · XSAVE confirmado en metal', 'done'],
			['Aislamiento de fallos', 'Revocación de pantalla observada', 'done'],
			['Teclado USB', 'Escribe en HW · intervalo corregido', 'done'],
			['Mouse USB', 'Descriptor HID · puntero y botones en metal', 'done'],
			['SATA / AHCI + FAT32', 'Lectura y escritura controlada', 'done'],
			['ESTRATOS v1', 'Montaje + lectura en hardware', 'done'],
			['BEF + verificación', 'Pipeline funcional', 'done'],
			['BEX desde disco', 'C + Ada + COBOL ejecutados', 'done'],
			['Frontend BMO C', '238 tests · base ejecutada en Ryzen', 'done'],
			['Frontend BMO COBOL', '217 tests · batch en Ryzen', 'done'],
			['Frontend BMO Ada', '20 tests · BEX en hardware', 'done'],
			['KIND_ARCHIVO', 'Ring 3 lee y guarda en FAT32', 'done'],
			['Batch COBOL', 'Escribe y relee el cierre en hardware', 'done'],
			['Desktop / compositor', 'Arranque directo desde gui.bex', 'done'],
			['KIND_MEMORIA + doble búfer', '8.4 MiB confirmados desde el kernel', 'done'],
			['Foco de ventanas', 'Alt+Tab + MRU observados en metal', 'done'],
			['Frontend BMO C++', '23 tests · CPU real pendiente', 'progress'],
			['Escritura ESTRATOS', 'Cableada al disco · sellar pendiente en metal', 'progress']
		] as [string, string, string][],
		ledgerLabel: 'LA FRONTERA IMPORTA',
		ledgerTitleA: 'Tres estados.',
		ledgerTitleEm: 'Ninguna promesa mezclada.',
		ledgerLead:
			'Esta separación convierte el progreso en información útil para una decisión técnica o de negocio: qué puede demostrarse hoy, qué está probado sin hardware y qué sigue siendo visión.',
		ledger: [
			{
				tag: '01 / OBSERVADO',
				name: 'METAL',
				title: 'Ya ocurrió en el Ryzen',
				text: 'Arranque UEFI, Ring 3, teclado y mouse, escritorio, C, Ada, COBOL interactivo, batch con archivos, memoria para doble búfer, foco Alt+Tab y recuperación de pantalla ante la muerte de un proceso.'
			},
			{
				tag: '02 / VERIFICADO',
				name: 'SOFTWARE',
				title: 'La siguiente frontera ya tiene base',
				text: 'El perfil C++ tiene 23 pruebas. ESTRATOS ya monta, navega y carga BEX en metal; su comando de sellado está cableado al dispositivo, pero falta demostrar persistencia tras reiniciar.'
			},
			{
				tag: '03 / DIRECCIÓN',
				name: 'DISEÑO',
				title: 'Existe como arquitectura, no como producto',
				text: 'TimeBack completo, recolección de estratos, rollback operativo, autenticidad criptográfica y uso bancario productivo continúan fuera de las afirmaciones actuales.'
			}
		],
		ledgerFooter:
			'pruebas verdes en los cinco componentes destacados: C, C++, COBOL, Ada y ESTRATOS',
		cobolLabel: 'FOCO ACTUAL / MODERNIZACIÓN',
		cobolText:
			'COBOL todavía sostiene procesos financieros y administrativos esenciales. BMO COBOL ya tiene lexer, parser, PIC propio, decimal exacto, archivos, registros binarios, COPYBOOK, FILE STATUS, EVALUATE, ROUNDED, STRING, INSPECT, GO TO, ON SIZE ERROR y PERFORM VARYING, además de salida BEF de extremo a extremo. En un Ryzen real ya recibe datos por consola, presenta importes y ejecuta un batch que lee movimientos, totaliza centavos, escribe el cierre y lo vuelve a leer. Eso no significa que todo COBOL esté implementado: más verbos, intrínsecas y un runtime mayor siguen pendientes. Su alcance se comunica mediante capacidades comprobadas, no con un porcentaje arbitrario de un ecosistema prácticamente inagotable.',
		cobolMetrics: [
			{ value: '217/217', label: 'tests del frontend' },
			{ value: '556', label: 'palabras catalogadas' },
			{ value: 'HW', label: 'ejecución en Ryzen real' }
		],
		batchLabel: 'NUEVO CORTE / PROCESAMIENTO POR LOTES',
		batchState: 'RESULTADO LEÍDO EN HARDWARE · REINICIO PENDIENTE',
		batchTitleA: 'Del movimiento diario',
		batchTitleEm: 'al cierre auditable.',
		batchTextA:
			'Un banco no vive de “Hola mundo”. Vive de procesos que reciben movimientos, los totalizan sin perder centavos y dejan un resultado verificable.',
		batchTextB: 'ya completa esa cadena en pruebas y genera un BEX válido de 6,224 bytes.',
		batchResultLabel: 'RESULTADO COMPROBADO',
		batchFlowLabel: 'Flujo del procesamiento batch COBOL',
		batchFlow: [
			{ name: 'OPEN INPUT', text: 'apps/movim.txt' },
			{ name: 'READ · AT END', text: 'una línea por movimiento' },
			{ name: 'DECIMAL EXACTO', text: 'centavos · sin float' },
			{ name: 'WRITE + CLOSE', text: 'apps/cierre.txt' }
		],
		batchFlowFooter: 'autoridad explícita · máximo actual 4 KiB',
		adaLabel: 'TERCER LENGUAJE NATIVO / NUEVO FRONTEND',
		adaTag: 'BMO ADA · PERFIL INICIAL Y HONESTO',
		adaTitleA: 'Una semántica distinta.',
		adaTitleEm: 'El mismo contrato.',
		adaText:
			'Ada no entra como una traducción de COBOL. Tiene lexer, parser y emisor propios; solo comparte BEF, el lowering opcional y las puertas de BMO-X. Su primer perfil admite un procedimiento aislado y rechaza explícitamente packages, genéricos y tareas todavía no implementados.',
		adaStats: [
			{ value: '20/20', label: 'pruebas correctas' },
			{ value: '5,112 B', label: 'cierre.bex' },
			{ value: '0', label: 'GNAT · runtime Ada' }
		],
		adaCodeLabel: 'Fragmento real del primer programa BMO Ada',
		sourceLabel: 'CINCO FUENTES / UNA PROGRESIÓN VERIFICABLE',
		sourceTitleA: 'No escribí una demostración vacía.',
		sourceTitleEm: 'Escribí reglas que pueden fallar.',
		sourceText:
			'Cada ejemplo añade una responsabilidad: hablar, calcular, integrar, presentar una línea bancaria y finalmente procesar archivos. La última etapa ya fue ejecutada en hardware; la persistencia específica después de reiniciar continúa como una prueba distinta.',
		sourceCodeLabel: 'Fragmento real de hola_COBOL.cob',
		cobolPrograms: [
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
				state: 'Probado en hardware'
			}
		],
		evidenceKicker: 'DIECIOCHO CAPTURAS / UNA EVOLUCIÓN REAL',
		evidenceTitleA: 'Lo que afirmo',
		evidenceTitleEm: 'se puede observar.',
		evidenceLead:
			'La secuencia conecta lenguaje, procesos, privilegios, FAT32, ESTRATOS y depuración de contexto en el mismo sistema sobre hardware físico. También conserva los estados intermedios.',
		evidenceBadge: 'CAPTURA DIRECTA / HARDWARE REAL',
		boundaryYes: 'SÍ DEMUESTRA',
		boundaryYesText:
			'Arranque UEFI → kernel → escritorio Ring 3 → ejecución BEX de C, Ada y COBOL → entrada, archivos y recuperación de capabilities sobre el mismo Ryzen físico.',
		boundaryNo: 'TODAVÍA NO AFIRMA',
		boundaryNoText:
			'Compatibilidad total de ningún lenguaje, C++ en metal, persistencia ESTRATOS confirmada tras reiniciar, rollback productivo, autenticidad criptográfica o producto bancario terminado.',
		frontierLabel: 'FRONTERA DE PLATAFORMA / SIN HUMO',
		frontierTitleA: 'Especializado hoy.',
		frontierTitleEm: 'Ampliable mañana.',
		frontier: [
			{
				tag: '01 / WEB MODERNA',
				title: 'Google no bloquea BMO-X',
				text: 'Un navegador como Chromium necesita red, TLS, HTTP, multiproceso, fuentes, audio, vídeo, JIT y una pila gráfica mucho mayor. BMO-X todavía no intenta reemplazar esa plataforma: prioriza ejecución nativa auditable y permisos explícitos.'
			},
			{
				tag: '02 / GPU',
				title: 'RDNA4 + Vulkan son dirección, no demo',
				text: 'RDNA4 es el hardware objetivo para investigar y Vulkan la API deseada. Aún no existe un driver funcional ni una prueba física: es una frontera de I+D, no una capacidad anunciada.'
			}
		],
		noteLabel: 'NOTA DE INGENIERÍA',
		noteText:
			'Las capturas corresponden a etapas distintas del desarrollo. Los fallos históricos se muestran porque documentar cómo se detectaron y corrigieron también es parte de la evidencia. Estado contrastado con la bitácora y las pruebas del proyecto en agosto de 2026.'
	},

	strata: {
		kicker: 'ARQUITECTURA EN DESARROLLO / TIMEBACK',
		status: 'Lectura en metal · sellado cableado al dispositivo',
		leadA: 'BMO-X ya monta, recorre y carga programas desde su propio formato en hardware.',
		leadStrong: 'Ahora falta sellar, reiniciar y comprobar la nueva generación en el SSD.',
		visualLabel: 'Recorrido de lectura verificado de ESTRATOS en hardware real',
		layers: [
			{ name: 'BEX EJECUTADO', text: 'C + COBOL · RING 3' },
			{ name: 'RUTA RESUELTA', text: 'apps/COBOL.bex' },
			{ name: 'NODO LEÍDO', text: ':datos + :firma BLAKE3' },
			{ name: 'VOLUMEN MONTADO', text: 'generación 1 · hardware' }
		],
		axis: 'RECORRIDO VERIFICADO',
		storyLabelA: 'HOY / LECTURA VERIFICADA',
		storyTitleA: 'Del volumen al programa.',
		storyTitleEm: 'Un recorrido real, no una simulación.',
		storyTextA:
			'Hoy el kernel valida superbloques, la identidad física del volumen, hashes BLAKE3, estratos, nodos, atributos y rutas antes de admitir un BEX desde el SSD.',
		storyLabelB: 'CABLEADO / ESCRITURA TRANSACCIONAL',
		storyTextB1:
			'La máquina de estados ya reserva, escribe, exige una barrera y alterna el superbloque para publicar una raíz nueva sin destruir la anterior. El comando',
		storyTextB2:
			'ya llega al dispositivo; todavía falta la prueba física completa de ejecutar, reiniciar y verificar que la generación persiste.',
		transaction: ['escribir sin sobrescribir', 'verificar contenido', 'publicar nueva raíz'],
		values: [
			{
				tag: '01 / INTEGRIDAD',
				title: 'Detectar corrupción',
				text: 'Bloques, nodos y raíces ya se comprueban con BLAKE3 al leer. Si un puntero no coincide con su contenido, CABINA lo trata como corrupción y detiene el recorrido.'
			},
			{
				tag: '02 / TRAZABILIDAD',
				title: 'Conservar procedencia',
				text: 'Un BEX ya mantiene juntos `:datos` y su hash `:firma`. Manifiesto de capabilities, procedencia firmada y autoría criptográfica continúan como ampliaciones previstas.'
			},
			{
				tag: '03 / AUTORIDAD',
				title: 'El permiso es el handle',
				text: 'Un proceso solo podría recorrer el árbol que recibió. Sus derechos de lectura, escritura o ejecución podrían reducirse, nunca ampliarse silenciosamente.'
			},
			{
				tag: '04 / RECUPERACIÓN',
				title: 'Historia como propiedad',
				text: 'TimeBack dejaría de duplicar archivos en una base paralela: log, diff y restore se convertirían en distintas vistas de los estratos que ya existen en el disco.'
			}
		],
		bexLabel: 'UN EJECUTABLE COMO OBJETO AUDITABLE',
		bexTitleA: 'El programa y su contexto',
		bexTitleEm: 'viajan juntos.',
		bexText:
			'El nodo actual ya une datos y hash BLAKE3 para comprobar integridad antes de admitir un BEX. Manifiesto y procedencia muestran la extensión prevista del mismo modelo.',
		bexObjectLabel: 'OBJETO / ESTRATOS',
		bexFields: [
			{ key: ':datos', text: 'Código nativo que se ejecuta', tag: 'BEF/BEX' },
			{ key: ':firma', text: 'Integridad implementada · no autoría', tag: 'BLAKE3' },
			{ key: ':manifiesto', text: 'Capabilities solicitadas · previsto', tag: 'FUTURO' },
			{ key: ':origen', text: 'Fuente, herramienta y momento · previsto', tag: 'FUTURO' }
		],
		roadmapLabel: 'ORDEN DE CONSTRUCCIÓN',
		roadmapTitleA: 'Primero proteger los datos.',
		roadmapTitleEm: 'Después escribirlos.',
		roadmapText:
			'El diseño no habilita escritura por entusiasmo. Cada etapa exige que la inferior esté probada, especialmente identidad del disco, barreras y recuperación.',
		roadmap: [
			{ name: 'Base física', text: 'AHCI, sectores y GPT ya observables', state: 'done' },
			{ name: 'FAT32 + identidad', text: 'rutas leídas y disco contrastado', state: 'done' },
			{ name: 'Capa de bloques', text: 'ESTRATOS ya no habla con SATA', state: 'done' },
			{ name: 'ESTRATOS lectura', text: 'montaje, rutas y BEX en hardware', state: 'done' },
			{ name: 'Escritura', text: 'sellar cableado · reinicio físico pendiente', state: 'active' },
			{ name: 'GC + TimeBack', text: 'retención, diff y recuperación', state: '' }
		],
		honestyLabel: 'ESTADO HONESTO / AGOSTO 2026',
		honestyStrong: 'ESTRATOS v1 ya es un sistema de ficheros legible por BMO-X:',
		honestyText:
			'monta desde hardware, contrasta identidad, verifica BLAKE3, recorre rutas y carga BEX de C y COBOL. El sellado transaccional ya está implementado y cableado, pero su persistencia tras reiniciar aún no se presenta como comprobada. GC, rollback y autenticidad criptográfica no están terminados.',
		honestyBadge: 'LECTURA REAL · SELLADO CABLEADO · REINICIO PENDIENTE'
	},

	projects: {
		kicker: 'TRABAJO SELECCIONADO',
		titleA: 'Otros sistemas,',
		titleEm: 'la misma obsesión.',
		lead: 'Cada proyecto parte de una pregunta real, construye una respuesta y deja evidencia medible.',
		problemLabel: 'EL PROBLEMA',
		purposeLabel: 'POR QUÉ EXISTE',
		valueLabel: 'LO QUE DEMUESTRA',
		repoLink: 'Ver código y documentación',
		items: [
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
		]
	},

	github: {
		kicker: 'CÓDIGO PÚBLICO / TRABAJO REVISABLE',
		titleA: 'No tiene que creerme.',
		titleEm: 'Puede revisar el trabajo.',
		cardNote: 'Código fuente · historial · documentación',
		cardLink: 'Abrir perfil ↗',
		summaryLabel: 'repositorios públicos para inspeccionar',
		summaryText:
			'No todos tienen la misma madurez. Estos proyectos resumen una práctica constante: entender problemas difíciles y convertirlos en sistemas que otras personas pueden abrir y revisar.',
		repos: [
			{
				tag: 'PROYECTO PRINCIPAL · PÚBLICO',
				name: 'BMO-X',
				text: 'Meta-kernel auditable, toolchain AOT y escritorio Ring 3 probados sobre hardware real.',
				stack: 'RUST · X86-64 · C · ADA · COBOL',
				url: 'https://github.com/AndreeSalazar/BMO-X',
				flagship: true
			},
			{
				tag: 'COMPILADOR',
				name: 'ADead-BIB',
				text: 'Convierte código C en programas ejecutables y mantiene visible cada etapa.',
				stack: 'RUST · C99 · PE/ELF',
				url: 'https://github.com/AndreeSalazar/ADead-BIB',
				flagship: false
			},
			{
				tag: 'HERRAMIENTAS',
				name: 'ASM-BIB',
				text: 'Ensambla, organiza y enlaza las piezas necesarias para formar un ejecutable.',
				stack: 'ASSEMBLER · COFF · PE',
				url: 'https://github.com/AndreeSalazar/ASM-BIB',
				flagship: false
			},
			{
				tag: 'GRÁFICOS',
				name: 'REACTOR',
				text: 'Ordena la complejidad de Vulkan para construir sin repetir toda su infraestructura.',
				stack: 'RUST · VULKAN',
				url: 'https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-',
				flagship: false
			},
			{
				tag: 'CÓMPUTO',
				name: 'GPU-Driven',
				text: 'Mueve simulaciones masivas a la GPU para estudiar escala y rendimiento medible.',
				stack: 'RUST · WGPU',
				url: 'https://github.com/AndreeSalazar/GPU-Driven',
				flagship: false
			}
		],
		disclosureLabel: 'QUÉ PUEDE COMPROBAR',
		disclosureText:
			'BMO-X ya tiene repositorio público: se pueden inspeccionar el meta-kernel, BEF, los frontends de C, Ada y COBOL, su historial y su documentación. Las fotografías de esta página añaden evidencia física; no sustituyen la revisión del código.'
	},

	expertise: {
		kicker: 'CAPACIDADES / EN CONTEXTO',
		titleA: 'La tecnología es',
		titleB: 'un',
		titleEm: 'medio, no el fin.',
		lead: 'Estas herramientas importan porque me permiten resolver problemas en distintas capas y entender cómo una decisión termina afectando al usuario, al equipo y al hardware.',
		skills: [
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
				meaning:
					'Convierto reglas de un lenguaje en software ejecutable, verificable y optimizable.'
			},
			{
				label: 'Rendimiento medible',
				value: 'Vulkan · DX12 · CUDA · wgpu · SIMD · Profiling',
				meaning:
					'No optimizo por intuición: mido, encuentro el costo real y actúo sobre la evidencia.'
			}
		]
	},

	method: {
		kicker: 'CÓMO TRABAJO',
		titleA: 'Del problema',
		titleB: 'a la',
		titleEm: 'evidencia.',
		lead: 'Mi proceso reduce incertidumbre antes de aumentar complejidad. Cada etapa debe producir algo que el equipo pueda revisar.',
		steps: [
			{
				name: 'Entender',
				text: 'Defino el problema, las restricciones y qué significa realmente tener éxito.'
			},
			{
				name: 'Diseñar',
				text: 'Divido el sistema en contratos pequeños, responsabilidades claras y riesgos verificables.'
			},
			{
				name: 'Construir',
				text: 'Implemento de abajo hacia arriba, manteniendo observabilidad y documentación útil.'
			},
			{
				name: 'Demostrar',
				text: 'Mido en condiciones reales, documento límites y separo hechos de planes futuros.'
			}
		]
	},

	credentials: {
		kicker: 'FORMACIÓN Y CREDENCIALES',
		titleA: 'Fundamentos sólidos,',
		titleEm: 'curiosidad permanente.',
		note: 'La formación acompaña una práctica independiente continua: cada concepto aprendido termina probado en un sistema propio.',
		items: [
			{
				period: '2024—2025',
				title: 'Ingeniería de Computación',
				text: 'Universidad Nacional Federico Villarreal',
				featured: true
			},
			{
				period: 'CERT.',
				title: 'Rust y Data Engineering with Rust',
				text: 'Coursera · Formación y certificación especializada',
				featured: false
			},
			{
				period: 'CERT.',
				title: 'C · C++ · Unreal Engine · R',
				text: 'Udemy · Formación técnica complementaria',
				featured: false
			},
			{
				period: 'CERT.',
				title: 'Angular · Java · Data Analyst with Python',
				text: 'Desarrollo de aplicaciones y análisis de datos',
				featured: false
			}
		]
	},

	contact: {
		kicker: 'CONTACTO',
		titleA: '¿Tu equipo enfrenta un',
		titleEm: 'problema difícil?',
		lead: 'Puedo aportar investigación, arquitectura y ejecución técnica en proyectos de sistemas, compiladores, plataformas, rendimiento o I+D. Me interesa trabajar donde comprender bien el problema sea tan importante como escribir el código.',
		cta: 'Iniciar una conversación',
		mailSubject: 'Contacto desde el portafolio de Eddi Salazar',
		note: 'Correo profesional y perfiles públicos pendientes de añadir.'
	},

	footer: {
		role: 'Systems Software Engineer',
		place: 'Lima, Perú',
		note: 'Diseñado con precisión y respeto por la tradición visual.',
		top: 'Volver arriba ↑'
	},

	// Las 18 fotografías. `image`, `width`, `height` y `facts` son datos, no copy:
	// las cifras y los nombres de fichero son idénticos en los dos idiomas.
	evidence: [
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
		},
		{
			index: '13',
			title: 'La placa elige BMO-X como un sistema real',
			image: '/images/bmo-x/13-uefi-bmo-x-hardware.jpg',
			width: 1280,
			height: 725,
			alt: 'Menú UEFI de una placa MSI mostrando BMO-X en el SSD Kingston junto a Windows Boot Manager',
			status: 'Entrada UEFI sobre disco físico',
			description:
				'El firmware de la placa ofrece BMO-X en el SSD SATA junto a Windows Boot Manager. Esta fotografía aporta el contexto físico que una captura de pantalla o una ventana de QEMU no podría aportar por sí sola.',
			facts: ['MSI A320M', 'Kingston SATA', 'UEFI · no hipervisor']
		},
		{
			index: '14',
			title: 'El escritorio de Ring 3 ya es el arranque',
			image: '/images/bmo-x/14-desktop-ring3-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'Escritorio y ventana Ejecutar de BMO-X dibujados por gui.bex en Ring 3',
			status: 'Compositor cargado desde disco',
			description:
				'gui.bex pinta el escritorio y su ventana Ejecutar fuera del kernel. La pantalla llega mediante una capability: cambiar la interfaz ya no obliga a recompilar Ring 0, y el shell permite lanzar otros BEX desde disco.',
			facts: ['gui.bex', 'Framebuffer capability', 'Ring 3 interactivo']
		},
		{
			index: '15',
			title: 'El sistema se explica desde dentro',
			image: '/images/bmo-x/15-info-zen3-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'Panel info de BMO-X mostrando Ryzen Zen 3, memoria, procesos y estado del disco',
			status: 'Telemetría del Ryzen real',
			description:
				'La vista info identifica Zen 3, seis núcleos físicos, doce hilos, frecuencia medida, memoria y programas lanzados. No es una cifra de marketing: es el propio sistema describiendo el banco de pruebas donde está corriendo.',
			facts: ['Ryzen 5 5600X', '6C / 12T', '14.8 GiB detectados']
		},
		{
			index: '16',
			title: 'C ejecuta aritmética, texto y control',
			image: '/images/bmo-x/16-c-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'Programa holac.bex generado por BMO C mostrando aritmética, cadenas y hexadecimal en Ryzen',
			status: 'BMO C ejecutado en silicio',
			description:
				'holac.bex recorre un bucle, opera enteros con signo, divide, calcula módulo e imprime cadenas y hexadecimal. La misma pantalla conserva su procedencia FAT32 y declara por qué allí no puede llevar el atributo de integridad de ESTRATOS.',
			facts: ['suma 1..10 = 55', 'cadena=viva', 'hex=beef']
		},
		{
			index: '17',
			title: 'COBOL ya conversa con una persona',
			image: '/images/bmo-x/17-cobol-accept-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'Calculadora COBOL en BMO-X leyendo dos importes y mostrando suma y resta exactas',
			status: 'ACCEPT + decimal exacto en Ryzen',
			description:
				'calc.bex recibe 5 y 90 desde la consola del proceso que lo lanzó, y responde 95.00 y −85.00. El programa no necesita apropiarse del teclado: lee por su capability de consola, lo que mantiene separada la entrada física de la lógica COBOL.',
			facts: ['ACCEPT', '95.00 exacto', 'KIND_CONSOLE']
		},
		{
			index: '18',
			title: 'Cuando un proceso muere, la pantalla vuelve',
			image: '/images/bmo-x/18-cabina-revocacion-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'CABINA registrando que el dueño Ring 3 del framebuffer murió y el kernel recuperó la pantalla',
			status: 'Revocación observada en hardware',
			description:
				'CABINA registra la cesión de pantalla, mouse y consola; luego advierte que el dueño del framebuffer murió y devuelve el panel al kernel. Es una prueba especialmente valiosa: muestra recuperación ante fallo, no solo el camino feliz.',
			facts: ['revoke_all', 'eventos perdidos = 0', 'Ring 3 aislado']
		}
	]
};

export type Copy = typeof es;
