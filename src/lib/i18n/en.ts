// English. Typed against `es`, so a missing key is a build error rather than a
// half-translated page in production.
//
// Translation rules used here:
//  - Names and system terms are never translated: BMO-X, BEF/BEX, ESTRATOS,
//    CABINA, Ring 0/3, capability, PICTURE, COMP-3, INVOKE, KIND_ARCHIVO.
//  - Numbers, test counts and file sizes are facts, not copy. They stay
//    identical in both languages — if one changes, both change.
//  - The honest-state wording is deliberately blunt in English too. Hedging it
//    for a foreign reader would defeat the point of having it.

import type { Copy } from './es';

export const en: Copy = {
	lang: 'en',
	locale: 'en_US',
	switchTo: 'Español',
	switchToLabel: 'Leer esta página en español',

	meta: {
		title: 'Eddi Andreé Salazar — Systems Software Engineer',
		description:
			'Portfolio of Eddi Andreé Salazar Matos, systems software engineer and systems architect working on kernels, compilers and GPU compute.',
		ogTitle: 'Eddi Andreé Salazar — Systems Software Engineer',
		ogDescription:
			'Compilers, operating systems and low-level compute, built from their foundations.',
		ogImageAlt: "BMO-X's desktop running in Ring 3 on a real AMD Ryzen 5 5600X."
	},

	nav: {
		home: 'Back to top',
		main: 'Main navigation',
		openMenu: 'Open menu',
		role: 'Systems Engineer',
		value: 'What I bring',
		bmo: 'BMO-X',
		projects: 'Projects',
		contact: 'Contact',
		github: 'GitHub ↗'
	},

	hero: {
		sealCaption: 'THE GREAT WAY IS SIMPLE',
		eyebrow: 'Lima, Peru · Independent R&D',
		titleA: 'I turn complexity',
		titleB: 'into',
		titleEm: 'clear systems.',
		lead: "I'm Eddi Salazar, a systems software engineer. I build technology from its foundations, so that what comes out is fast, controllable, and able to grow without turning into a black box.",
		proofLabel: 'Professional summary',
		proof: ['Systems architecture', 'Compilers and languages', 'Performance and hardware'],
		ctaPrimary: 'Explore BMO-X',
		ctaGhost: 'See selected work',
		asideCount: '01 / 05',
		asideLabel: 'Featured project',
		scroll: 'Scroll to explore'
	},

	profile: {
		kicker: 'PROFILE / 2019—PRESENT',
		titleA: "I don't just write code.",
		titleEm: 'I understand why.',
		large:
			'I work on problems where wiring tools together is not enough: you have to understand what happens underneath, choose the boundaries well, and build a base that holds.',
		body: 'Since 2019 I have run an independent lab with 45 public repositories. They are not demos. They are a sustained way of learning, testing ideas, and taking on projects that demand patience, design, and end-to-end ownership.',
		numbersLabel: 'Key metrics',
		numbers: [
			{ value: '6', sup: '+', line1: 'Years of independent', line2: 'R&D' },
			{ value: '45', sup: '', line1: 'Public', line2: 'repositories' },
			{ value: '41', sup: '', line1: 'Visible C cases', line2: 'in ADead-BIB' },
			{ value: '544', sup: '', line1: 'Critical tests', line2: 'green right now' }
		]
	},

	value: {
		kicker: 'WHAT I BRING TO A TEAM',
		titleA: 'Technical depth',
		titleB: 'with',
		titleEm: 'product judgement.',
		noteLabel: 'IN ONE SENTENCE',
		note: 'An engineer for hard problems — able to investigate the unknown, explain the decisions, and turn them into working software.',
		strengths: [
			{
				number: '01',
				title: 'I see the whole system',
				text: 'I connect product, architecture, software and hardware, so that a local fix does not quietly create a new problem somewhere else.'
			},
			{
				number: '02',
				title: 'I take real ownership',
				text: 'I can carry an ambiguous idea all the way to an implementation that boots, gets measured, and is documented.'
			},
			{
				number: '03',
				title: 'I debug with evidence',
				text: 'I work through hypotheses, telemetry and tests. In BMO-X I fixed hardware faults using nothing but on-screen diagnostics.'
			},
			{
				number: '04',
				title: 'I simplify without hiding',
				text: 'I look for small, explainable interfaces that keep the costs and the important decisions in plain sight.'
			}
		],
		fitLabel: 'WHERE I ADD THE MOST',
		fit: ['Systems engineering', 'Compilers', 'Platforms', 'Performance', 'Applied R&D']
	},

	bmo: {
		kicker: 'MAIN PROJECT / IN DEVELOPMENT',
		subtitle: 'Bare Metal Orchestrator · Meta-Kernel',
		badge: 'Verified on real hardware · not QEMU',
		repoLink: 'Public repository',
		quoteA: 'Not a traditional OS. A',
		quoteEm: 'meta-kernel',
		quoteB: 'that organises execution, authority and formats straight from the metal.',
		intro:
			'BMO stands for Bare Metal Orchestrator. It does not try to copy Windows or Linux feature by feature: it brings up the hardware, applies capabilities, exposes three stable gates and coordinates BEF containers. Each language keeps its own frontend and its own semantics; BMO controls how the result is validated and how it earns the authority to run. The current model is pure AOT — every frontend produces native code before it reaches the system, with no JIT at runtime.',
		why: [
			{
				label: 'THE PROBLEM',
				title: 'Critical logic trapped under opaque layers',
				text: 'In banking, a COBOL rule can still be correct decades later, but running it depends on platforms that are hard to replace, hard to inspect and hard to isolate.'
			},
			{
				label: 'WHY IT EXISTS',
				title: 'A narrow base that can actually be audited',
				text: 'BMO reduces the entrance to the meta-kernel to three operations. Fewer fundamental gates mean fewer contracts to review, test and hold stable.'
			},
			{
				label: 'WHAT IT IS FOR',
				title: 'A shared container, not a single language',
				text: 'BEF packages the output of C, Ada and COBOL. BMO verifies the container, grants capabilities and coordinates native execution without forcing the languages to share semantics.'
			}
		],
		impactLabel: "A BANK MANAGER'S PERSPECTIVE",
		impactTitle:
			'They would not evaluate “a kernel”. They would evaluate control, traceability and risk.',
		impactText:
			'The practical point of BMO-X is that it separates the rule written in the language, the executable container, and the authority granted by the system. An audit can then ask three questions independently: what does the program do, what is inside the BEF, and which permissions did it receive when it ran.',
		impact: [
			{
				title: 'Modernisation without losing precision',
				text: 'Explores how to move COBOL logic onto a new platform while preserving the decimal behaviour that financial processes require.'
			},
			{
				title: 'A smaller surface to change',
				text: 'Three stable gates reduce the number of fundamental contracts that have to be maintained, tested and protected.'
			},
			{
				title: 'Explicit authority',
				text: 'The capability model aims to give each program only the permissions it needs, making who-can-do-what visible rather than assumed.'
			}
		],
		honestyLabel: 'Honest status:',
		honestyText:
			'this is an experimental R&D platform, not a banking product ready for production. Its value today is the validated architecture, the accumulated learning, and the delivery capability it demonstrates.',
		syscallDivider: 'THE TECHNICAL IDEA, IN A SINGLE LINE',
		syscalls: [
			{ name: 'INVOKE', text: 'Ask for an operation' },
			{ name: 'CHANNEL_KICK', text: 'Signal that there is work' },
			{ name: 'WAIT', text: 'Wait without burning resources' }
		],
		langLabel: 'STRATEGY / FEWER LANGUAGES, MORE USEFULNESS',
		langTitleA: 'I am not ticking boxes.',
		langTitleEm: 'I am covering responsibilities.',
		langLead:
			'The goal is not to announce full compatibility. It is to build essential, useful, auditable profiles that grow in response to real problems.',
		languages: [
			{
				tag: '01 / CONTROL',
				name: 'C',
				title: 'Speaking close to the hardware',
				text: 'The base for systems, drivers and tooling. It already covers input, aggregates, memory, varargs, bitfields and an essential libc; capabilities grow out of need, not to fake the whole standard.',
				note: '238 TESTS · BASE EXECUTED ON THE RYZEN'
			},
			{
				tag: '02 / CORRECTNESS',
				name: 'ADA',
				title: 'Expressing critical rules',
				text: 'Strong types and exact decimal for logic where the boundaries matter. The initial profile already generates and runs native BEX.',
				note: '20/20 TESTS · REAL HARDWARE'
			},
			{
				tag: '03 / BUSINESS',
				name: 'COBOL',
				title: 'Preserving financial intent',
				text: 'Decimal, PICTURE, COMP-3, records, COPYBOOK, FILE STATUS and batch processing, for rules a business can still read. It is functional, not a complete implementation of the standard.',
				note: '217 TESTS · BATCH EXECUTED ON HARDWARE'
			}
		],
		langFooterLabel: 'C++ · ACTIVE R&D',
		langFooterText:
			'It already emits BEX and runs classes, RAII, overloading, single inheritance and virtual dispatch across 23 automated tests. It stays marked as software with no physical debut: it is not presented as complete C++, nor as confirmed execution on the Ryzen.',
		flowLabel: 'FROM A BUSINESS RULE TO THE HARDWARE',
		flow: [
			{ name: 'C · ADA · COBOL', text: 'Each frontend keeps its own semantics' },
			{ name: 'BEF', text: 'Shared container with code and metadata' },
			{ name: 'VERIFY + BEX', text: 'Native AOT: validated and executable before it runs' },
			{ name: 'BMO META-KERNEL', text: 'Capabilities, isolation and three gates' },
			{ name: 'REAL HARDWARE', text: 'Ryzen 5 5600X · x86-64 · not QEMU' }
		],
		statusLabel: 'VERIFIED STATUS / AUGUST 2026',
		status: [
			['UEFI boot chain', 'Real hardware · not QEMU', 'done'],
			['Ring 0 meta-kernel', 'Stable capabilities', 'done'],
			['Ring 3 userspace', 'Tested · XSAVE confirmed on metal', 'done'],
			['Fault isolation', 'Screen revocation observed', 'done'],
			['USB keyboard', 'Types on HW · interval corrected', 'done'],
			['USB mouse', 'HID descriptor · pointer and buttons on metal', 'done'],
			['SATA / AHCI + FAT32', 'Controlled read and write', 'done'],
			['ESTRATOS v1', 'Mount + read on hardware', 'done'],
			['BEF + verification', 'Working pipeline', 'done'],
			['BEX from disk', 'C + Ada + COBOL executed', 'done'],
			['BMO C frontend', '238 tests · base executed on the Ryzen', 'done'],
			['BMO COBOL frontend', '217 tests · batch on the Ryzen', 'done'],
			['BMO Ada frontend', '20 tests · BEX on hardware', 'done'],
			['KIND_ARCHIVO', 'Ring 3 reads and saves on FAT32', 'done'],
			['COBOL batch', 'Writes and re-reads the close on hardware', 'done'],
			['Desktop / compositor', 'Boots straight from gui.bex', 'done'],
			['KIND_MEMORIA + double buffer', '8.4 MiB confirmed by the kernel', 'done'],
			['Window focus', 'Alt+Tab + MRU observed on metal', 'done'],
			['BMO C++ frontend', '23 tests · real CPU pending', 'progress'],
			['ESTRATOS writes', 'Wired to the disk · sealing pending on metal', 'progress']
		],
		ledgerLabel: 'THE BOUNDARY IS THE POINT',
		ledgerTitleA: 'Three states.',
		ledgerTitleEm: 'No promises blended in.',
		ledgerLead:
			'Keeping them apart turns progress into something a technical or business decision can actually use: what can be shown today, what is tested without hardware, and what is still just a direction.',
		ledger: [
			{
				tag: '01 / OBSERVED',
				name: 'METAL',
				title: 'It already happened on the Ryzen',
				text: 'UEFI boot, Ring 3, keyboard and mouse, the desktop, C, Ada, interactive COBOL, batch with files, memory for double buffering, Alt+Tab focus, and screen recovery when a process dies.'
			},
			{
				tag: '02 / VERIFIED',
				name: 'SOFTWARE',
				title: 'The next frontier already has a base',
				text: 'The C++ profile has 23 tests. ESTRATOS mounts, navigates and loads BEX on metal; its sealing command is wired to the device, but persistence across a reboot has not been demonstrated yet.'
			},
			{
				tag: '03 / DIRECTION',
				name: 'DESIGN',
				title: 'It exists as architecture, not as a product',
				text: 'Full TimeBack, stratum collection, operational rollback, cryptographic authenticity and productive banking use all remain outside what is claimed today.'
			}
		],
		ledgerFooter:
			'green tests across the five highlighted components: C, C++, COBOL, Ada and ESTRATOS',
		cobolLabel: 'CURRENT FOCUS / MODERNISATION',
		cobolText:
			'COBOL still carries essential financial and administrative processes. BMO COBOL already has a lexer, a parser, its own PIC, exact decimal, files, binary records, COPYBOOK, FILE STATUS, EVALUATE, ROUNDED, STRING, INSPECT, GO TO, ON SIZE ERROR and PERFORM VARYING, plus end-to-end BEF output. On a real Ryzen it already takes input from the console, formats amounts, and runs a batch that reads transactions, totals the cents, writes the close and reads it back. That does not mean all of COBOL is implemented: more verbs, intrinsics and a larger runtime are still missing. Its scope is communicated through capabilities that have been checked, not through an arbitrary percentage of a practically inexhaustible ecosystem.',
		cobolMetrics: [
			{ value: '217/217', label: 'frontend tests' },
			{ value: '556', label: 'catalogued words' },
			{ value: 'HW', label: 'executed on a real Ryzen' }
		],
		batchLabel: 'NEW VERTICAL SLICE / BATCH PROCESSING',
		batchState: 'RESULT READ ON HARDWARE · REBOOT STILL PENDING',
		batchTitleA: "From the day's transactions",
		batchTitleEm: 'to an auditable close.',
		batchTextA:
			'A bank does not run on “Hello, world”. It runs on processes that take transactions in, total them without losing a cent, and leave behind a result someone can verify.',
		batchTextB: 'already completes that chain in tests and produces a valid 6,224-byte BEX.',
		batchResultLabel: 'VERIFIED RESULT',
		batchFlowLabel: 'COBOL batch processing flow',
		batchFlow: [
			{ name: 'OPEN INPUT', text: 'apps/movim.txt' },
			{ name: 'READ · AT END', text: 'one line per transaction' },
			{ name: 'EXACT DECIMAL', text: 'cents · no float' },
			{ name: 'WRITE + CLOSE', text: 'apps/cierre.txt' }
		],
		batchFlowFooter: 'explicit authority · current maximum 4 KiB',
		adaLabel: 'THIRD NATIVE LANGUAGE / NEW FRONTEND',
		adaTag: 'BMO ADA · INITIAL AND HONEST PROFILE',
		adaTitleA: 'Different semantics.',
		adaTitleEm: 'The same contract.',
		adaText:
			'Ada does not arrive as a translation of COBOL. It has its own lexer, parser and emitter; all it shares is BEF, the optional lowering, and the BMO-X gates. Its first profile accepts a single standalone procedure and explicitly rejects packages, generics and tasks, which are not implemented yet.',
		adaStats: [
			{ value: '20/20', label: 'tests passing' },
			{ value: '5,112 B', label: 'cierre.bex' },
			{ value: '0', label: 'GNAT · Ada runtime' }
		],
		adaCodeLabel: 'Real excerpt from the first BMO Ada program',
		sourceLabel: 'FIVE SOURCES / ONE VERIFIABLE PROGRESSION',
		sourceTitleA: 'I did not write an empty demo.',
		sourceTitleEm: 'I wrote rules that can fail.',
		sourceText:
			'Each example adds one responsibility: speak, compute, integrate, produce a banking line, and finally process files. The last stage has already run on hardware; persistence specifically across a reboot remains a separate test.',
		sourceCodeLabel: 'Real excerpt from hola_COBOL.cob',
		cobolPrograms: [
			{
				name: 'hola.cob',
				label: 'The first voice',
				text: 'Checks that DISPLAY crosses the generic INVOKE gate and reaches the BMO-X console from Ring 3.',
				state: 'Minimal slice'
			},
			{
				name: 'banco.cob',
				label: 'The financial rule',
				text: 'Exercises instalments, loops, decisions and refunds with money represented in cents, no floating point.',
				state: 'Language test'
			},
			{
				name: 'hola_COBOL.cob',
				label: 'Full integration',
				text: 'Brings together PIC variables, different scales, IF/ELSE, two forms of PERFORM, ADD and COMPUTE in the BEX the Ryzen executed.',
				state: 'Tested on hardware'
			},
			{
				name: 'extracto.cob',
				label: 'The banking line',
				text: 'Computes a balance, protects a cheque field with asterisks, applies currency formatting and flags an overdraft with CR.',
				state: 'Tested on hardware'
			},
			{
				name: 'batch.cob',
				label: 'The nightly close',
				text: 'Reads transactions, totals the cents, creates a close, and only persists the result when CLOSE runs.',
				state: 'Tested on hardware'
			}
		],
		evidenceKicker: 'EIGHTEEN CAPTURES / ONE REAL EVOLUTION',
		evidenceTitleA: 'What I claim',
		evidenceTitleEm: 'can be observed.',
		evidenceLead:
			'The sequence connects language, processes, privileges, FAT32, ESTRATOS and context debugging inside the same system on physical hardware. It also keeps the intermediate states.',
		evidenceBadge: 'DIRECT CAPTURE / REAL HARDWARE',
		boundaryYes: 'WHAT IT DOES PROVE',
		boundaryYesText:
			'UEFI boot → kernel → Ring 3 desktop → BEX execution of C, Ada and COBOL → input, files and capability recovery, all on the same physical Ryzen.',
		boundaryNo: 'WHAT IT DOES NOT CLAIM YET',
		boundaryNoText:
			'Full compatibility with any of the languages, C++ on metal, ESTRATOS persistence confirmed after a reboot, production rollback, cryptographic authenticity, or a finished banking product.',
		frontierLabel: 'PLATFORM FRONTIER / NO HAND-WAVING',
		frontierTitleA: 'Specialised today.',
		frontierTitleEm: 'Extensible tomorrow.',
		frontier: [
			{
				tag: '01 / THE MODERN WEB',
				title: 'Google is not blocking BMO-X',
				text: 'A browser like Chromium needs networking, TLS, HTTP, multiprocess, fonts, audio, video, a JIT and a far larger graphics stack. BMO-X is not trying to replace that platform yet: it prioritises auditable native execution and explicit permissions.'
			},
			{
				tag: '02 / GPU',
				title: 'RDNA4 + Vulkan are a direction, not a demo',
				text: 'RDNA4 is the target hardware to investigate and Vulkan the intended API. There is no working driver and no physical test yet: it is an R&D frontier, not an announced capability.'
			}
		],
		noteLabel: 'ENGINEERING NOTE',
		noteText:
			'These captures come from different stages of development. Historical failures are shown because documenting how they were found and fixed is part of the evidence too. Status cross-checked against the project log and test suite in August 2026.'
	},

	strata: {
		kicker: 'ARCHITECTURE IN DEVELOPMENT / TIMEBACK',
		status: 'Reading on metal · sealing wired to the device',
		leadA: 'BMO-X already mounts, walks and loads programs from its own format on hardware.',
		leadStrong: 'What remains is to seal, reboot, and confirm the new generation on the SSD.',
		visualLabel: 'Verified ESTRATOS read path on real hardware',
		layers: [
			{ name: 'BEX EXECUTED', text: 'C + COBOL · RING 3' },
			{ name: 'PATH RESOLVED', text: 'apps/COBOL.bex' },
			{ name: 'NODE READ', text: ':datos + :firma BLAKE3' },
			{ name: 'VOLUME MOUNTED', text: 'generation 1 · hardware' }
		],
		axis: 'VERIFIED PATH',
		storyLabelA: 'TODAY / VERIFIED READING',
		storyTitleA: 'From the volume to the program.',
		storyTitleEm: 'A real path, not a simulation.',
		storyTextA:
			'Today the kernel validates superblocks, the physical identity of the volume, BLAKE3 hashes, strata, nodes, attributes and paths before admitting a BEX from the SSD.',
		storyLabelB: 'WIRED / TRANSACTIONAL WRITING',
		storyTextB1:
			'The state machine already reserves, writes, demands a barrier and swaps the superblock to publish a new root without destroying the previous one. The',
		storyTextB2:
			'command now reaches the device; what is still missing is the full physical test of running it, rebooting, and verifying that the generation survived.',
		transaction: ['write without overwriting', 'verify the content', 'publish the new root'],
		values: [
			{
				tag: '01 / INTEGRITY',
				title: 'Detecting corruption',
				text: 'Blocks, nodes and roots are already checked with BLAKE3 on read. If a pointer does not match its content, CABINA treats it as corruption and stops the walk.'
			},
			{
				tag: '02 / TRACEABILITY',
				title: 'Keeping provenance',
				text: 'A BEX already keeps `:datos` and its `:firma` hash together. A capability manifest, signed provenance and cryptographic authorship remain planned extensions.'
			},
			{
				tag: '03 / AUTHORITY',
				title: 'The permission is the handle',
				text: 'A process could only walk the tree it was handed. Its read, write or execute rights could be narrowed, never silently widened.'
			},
			{
				tag: '04 / RECOVERY',
				title: 'History as a property',
				text: 'TimeBack would stop duplicating files into a parallel store: log, diff and restore would become different views of the strata already on the disk.'
			}
		],
		bexLabel: 'AN EXECUTABLE AS AN AUDITABLE OBJECT',
		bexTitleA: 'The program and its context',
		bexTitleEm: 'travel together.',
		bexText:
			'The current node already binds data and a BLAKE3 hash to check integrity before a BEX is admitted. The manifest and provenance fields show the intended extension of the same model.',
		bexObjectLabel: 'OBJECT / ESTRATOS',
		bexFields: [
			{ key: ':datos', text: 'Native code that executes', tag: 'BEF/BEX' },
			{ key: ':firma', text: 'Integrity implemented · not authorship', tag: 'BLAKE3' },
			{ key: ':manifiesto', text: 'Capabilities requested · planned', tag: 'FUTURE' },
			{ key: ':origen', text: 'Source, tool and moment · planned', tag: 'FUTURE' }
		],
		roadmapLabel: 'BUILD ORDER',
		roadmapTitleA: 'Protect the data first.',
		roadmapTitleEm: 'Write it second.',
		roadmapText:
			'The design does not enable writing out of enthusiasm. Every stage requires the one below it to be proven — disk identity, barriers and recovery above all.',
		roadmap: [
			{ name: 'Physical base', text: 'AHCI, sectors and GPT already observable', state: 'done' },
			{ name: 'FAT32 + identity', text: 'paths read and disk cross-checked', state: 'done' },
			{ name: 'Block layer', text: 'ESTRATOS no longer talks to SATA', state: 'done' },
			{ name: 'ESTRATOS reading', text: 'mount, paths and BEX on hardware', state: 'done' },
			{ name: 'Writing', text: 'sealing wired · physical reboot pending', state: 'active' },
			{ name: 'GC + TimeBack', text: 'retention, diff and recovery', state: '' }
		],
		honestyLabel: 'HONEST STATUS / AUGUST 2026',
		honestyStrong: 'ESTRATOS v1 is already a filesystem BMO-X can read:',
		honestyText:
			'it mounts from hardware, cross-checks identity, verifies BLAKE3, walks paths and loads C and COBOL BEX files. Transactional sealing is implemented and wired, but its persistence across a reboot is not presented as proven. GC, rollback and cryptographic authenticity are not finished.',
		honestyBadge: 'READING REAL · SEALING WIRED · REBOOT PENDING'
	},

	projects: {
		kicker: 'SELECTED WORK',
		titleA: 'Other systems,',
		titleEm: 'the same obsession.',
		lead: 'Every project starts from a real question, builds an answer, and leaves measurable evidence behind.',
		problemLabel: 'THE PROBLEM',
		purposeLabel: 'WHY IT EXISTS',
		valueLabel: 'WHAT IT DEMONSTRATES',
		repoLink: 'See code and documentation',
		items: [
			{
				index: '02',
				name: 'ADead-BIB v13',
				type: 'C compiler and native toolchain',
				problem:
					'Compilers tend to feel like black boxes, and they force you to depend on enormous toolchains just to make progress.',
				purpose:
					'To control the whole path that turns human code into a running program, from the parser to the binary.',
				description:
					'Public repository with frontend, IR, optimisation, undefined-behaviour detection, an x86-64 encoder and PE/ELF writers. Its own documentation separates finished goals from areas that are still partial.',
				value:
					'Demonstrates compiler architecture, executable formats, and the discipline to audit what is still missing as well.',
				metric: '41',
				metricLabel: 'visible C cases',
				tags: ['Rust', 'C99', 'x86-64', 'PE / ELF'],
				url: 'https://github.com/AndreeSalazar/ADead-BIB'
			},
			{
				index: '03',
				name: 'ASM-BIB',
				type: 'Assembler and binary toolchain',
				problem:
					'A compiler of your own still depends on third parties if it cannot assemble, produce objects and link its own results.',
				purpose:
					'To close that dependency with an in-house pipeline, from instructions to COFF objects and PE executables.',
				description:
					'Combines lexer, parser, intermediate representation, MASM/NASM emitters, a COFF encoder and an internal PE linker — the natural companion to ADead-BIB.',
				value:
					'Demonstrates command of binary formats and of tools that cooperate through explicit contracts.',
				metric: 'COFF',
				metricLabel: 'direct encoder',
				tags: ['Rust', 'Assembler', 'COFF', 'PE'],
				url: 'https://github.com/AndreeSalazar/ASM-BIB'
			},
			{
				index: '04',
				name: 'GPU-Driven',
				type: 'Massive GPU simulation',
				problem:
					'Updating large numbers of entities on the CPU limits scale and tangles simulation, rendering and synchronisation together.',
				purpose:
					'To move the repetitive work onto the GPU and study massive, explicit, deterministic execution.',
				description:
					'Public demonstrator in Rust and wgpu with workgroup compute, explicit buffers and a documented simulation/render pipeline.',
				value:
					'Demonstrates how I turn a performance hypothesis into an architecture that runs and can be measured.',
				metric: '1M',
				metricLabel: 'entities reported',
				tags: ['Rust', 'wgpu', 'Compute', 'RTX 3060'],
				url: 'https://github.com/AndreeSalazar/GPU-Driven'
			},
			{
				index: '05',
				name: 'REACTOR',
				type: 'Framework for working with Vulkan',
				problem:
					'Vulkan offers a lot of control, but demands too much boilerplate before it produces a useful image or computation.',
				purpose:
					'To organise the complexity of Vulkan so the work goes into the application rather than into repetitive setup.',
				description:
					'Public framework with a visible separation between the Vulkan base, the safe engine systems and the application layer. Includes examples, hosted input and an audit of its limitations.',
				value:
					'Demonstrates the ability to turn a difficult API into a clearer, more productive architecture.',
				metric: '3',
				metricLabel: 'architecture layers',
				tags: ['Rust', 'Vulkan', 'Framework', 'GPU'],
				url: 'https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-'
			}
		]
	},

	github: {
		kicker: 'PUBLIC CODE / REVIEWABLE WORK',
		titleA: "You don't have to take my word for it.",
		titleEm: 'You can review the work.',
		cardNote: 'Source code · history · documentation',
		cardLink: 'Open profile ↗',
		summaryLabel: 'public repositories to inspect',
		summaryText:
			'They are not all equally mature. Together they describe a constant practice: understanding hard problems and turning them into systems other people can open and review.',
		repos: [
			{
				tag: 'MAIN PROJECT · PUBLIC',
				name: 'BMO-X',
				text: 'Auditable meta-kernel, AOT toolchain and Ring 3 desktop, tested on real hardware.',
				stack: 'RUST · X86-64 · C · ADA · COBOL',
				url: 'https://github.com/AndreeSalazar/BMO-X',
				flagship: true
			},
			{
				tag: 'COMPILER',
				name: 'ADead-BIB',
				text: 'Turns C code into running programs and keeps every stage visible.',
				stack: 'RUST · C99 · PE/ELF',
				url: 'https://github.com/AndreeSalazar/ADead-BIB',
				flagship: false
			},
			{
				tag: 'TOOLING',
				name: 'ASM-BIB',
				text: 'Assembles, arranges and links the pieces needed to form an executable.',
				stack: 'ASSEMBLER · COFF · PE',
				url: 'https://github.com/AndreeSalazar/ASM-BIB',
				flagship: false
			},
			{
				tag: 'GRAPHICS',
				name: 'REACTOR',
				text: 'Orders the complexity of Vulkan so you can build without rewriting all its infrastructure.',
				stack: 'RUST · VULKAN',
				url: 'https://github.com/AndreeSalazar/REACTOR-Framework-for-Vulkan-',
				flagship: false
			},
			{
				tag: 'COMPUTE',
				name: 'GPU-Driven',
				text: 'Moves massive simulations onto the GPU to study scale and measurable performance.',
				stack: 'RUST · WGPU',
				url: 'https://github.com/AndreeSalazar/GPU-Driven',
				flagship: false
			}
		],
		disclosureLabel: 'WHAT YOU CAN CHECK',
		disclosureText:
			'BMO-X has a public repository: you can inspect the meta-kernel, BEF, the C, Ada and COBOL frontends, the commit history and the documentation. The photographs on this page add physical evidence; they do not replace reading the code.'
	},

	expertise: {
		kicker: 'CAPABILITIES / IN CONTEXT',
		titleA: 'Technology is',
		titleB: 'a',
		titleEm: 'means, not the end.',
		lead: 'These tools matter because they let me solve problems at different layers and understand how one decision ends up affecting the user, the team and the hardware.',
		skills: [
			{
				label: 'Building systems',
				value: 'Rust · C · C++ · x86-64 Assembly · Python',
				meaning:
					'I can work from the idea and the design all the way down to instructions the processor executes.'
			},
			{
				label: 'Architecture and isolation',
				value: 'Kernels · UEFI / MBR · Memory · Schedulers · Ring 0/3',
				meaning:
					'I design clear boundaries so components fail in controlled ways and the system stays understandable.'
			},
			{
				label: 'Languages and compilers',
				value: 'Parsing · AST · IR · PE / ELF · AOT · JIT',
				meaning:
					"I turn a language's rules into software that runs, can be verified, and can be optimised."
			},
			{
				label: 'Measurable performance',
				value: 'Vulkan · DX12 · CUDA · wgpu · SIMD · Profiling',
				meaning:
					'I do not optimise on intuition: I measure, find the real cost, and act on the evidence.'
			}
		]
	},

	method: {
		kicker: 'HOW I WORK',
		titleA: 'From the problem',
		titleB: 'to the',
		titleEm: 'evidence.',
		lead: 'My process reduces uncertainty before it adds complexity. Every stage has to produce something the team can review.',
		steps: [
			{
				name: 'Understand',
				text: 'I define the problem, the constraints, and what success actually means here.'
			},
			{
				name: 'Design',
				text: 'I split the system into small contracts, clear responsibilities and verifiable risks.'
			},
			{
				name: 'Build',
				text: 'I implement from the bottom up, keeping observability and documentation that earns its place.'
			},
			{
				name: 'Demonstrate',
				text: 'I measure under real conditions, document the limits, and keep facts separate from plans.'
			}
		]
	},

	credentials: {
		kicker: 'EDUCATION AND CREDENTIALS',
		titleA: 'Solid fundamentals,',
		titleEm: 'permanent curiosity.',
		note: 'Formal education runs alongside a continuous independent practice: every concept learned ends up tested inside a system of my own.',
		items: [
			{
				period: '2024—2025',
				title: 'Computer Engineering',
				text: 'Universidad Nacional Federico Villarreal',
				featured: true
			},
			{
				period: 'CERT.',
				title: 'Rust and Data Engineering with Rust',
				text: 'Coursera · Specialised training and certification',
				featured: false
			},
			{
				period: 'CERT.',
				title: 'C · C++ · Unreal Engine · R',
				text: 'Udemy · Complementary technical training',
				featured: false
			},
			{
				period: 'CERT.',
				title: 'Angular · Java · Data Analyst with Python',
				text: 'Application development and data analysis',
				featured: false
			}
		]
	},

	contact: {
		kicker: 'CONTACT',
		titleA: 'Is your team facing a',
		titleEm: 'hard problem?',
		lead: 'I can contribute research, architecture and technical delivery on systems, compilers, platforms, performance or R&D. I want to work where understanding the problem well matters as much as writing the code.',
		cta: 'Start a conversation',
		mailSubject: "Contact from Eddi Salazar's portfolio",
		note: 'Professional email and public profiles still to be added.'
	},

	footer: {
		role: 'Systems Software Engineer',
		place: 'Lima, Peru',
		note: 'Designed with precision and respect for the visual tradition.',
		top: 'Back to top ↑'
	},

	evidence: [
		{
			index: '01',
			title: 'COBOL runs logic now, not just a greeting',
			image: '/images/bmo-x/01-cobol-ring3-hardware.png',
			width: 899,
			height: 1599,
			alt: 'BMO-X on real hardware showing ASM, C and COBOL programs executed in Ring 3',
			status: 'Full execution',
			description:
				'The output confirms exact decimal, a charge with a scale change, a loop, a refund and correct termination. In the same session, ASM crosses from CPL3 to CPL0 and C completes its calculations.',
			facts: ['3 × 19.99 = 59.97', 'CPL3 → INVOKE → CPL0', 'ASM · C · COBOL']
		},
		{
			index: '02',
			title: 'A visible failure turned into a diagnosis',
			image: '/images/bmo-x/02-diagnostico-hardware.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X diagnostics showing SATA, GPT, Ring 3 processes and an intermediate USB keyboard fault',
			status: 'Debugging stage',
			description:
				'This capture preserves an intermediate state: the keyboard enumerated, but kev=0 proved it was delivering no keys. Tracing it found that bInterval was being treated as a direct value rather than an exponent; after the fix, typing works on hardware.',
			facts: ['GPT: 3 partitions', '3 processes finish', 'USB fault measured']
		},
		{
			index: '03',
			title: 'The meta-kernel recognises the real disk',
			image: '/images/bmo-x/03-almacenamiento-ahci.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X identifying a Kingston SATA SSD and reading its GPT table',
			status: 'Storage verified',
			description:
				'BMO-X identifies a 447 GiB Kingston A400 over AHCI, counts its sectors and reads three GPT partitions. The screen also states the limit of that test plainly: writing is still blocked until the disk is identified.',
			facts: ['Kingston · 447 GiB', 'AHCI · port 2', 'Read-only mode']
		},
		{
			index: '04',
			title: 'Three languages, three independent processes',
			image: '/images/bmo-x/04-procesos-bex.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X table with independent BEX processes for ASM, C and COBOL in a finished state',
			status: 'Observable isolation',
			description:
				'ASM, C and COBOL each appear with their own PID, TID, size, sections and lifecycle. All three reach “finished”: they are not lines printed by a single program in disguise, but BEX images loaded and managed separately.',
			facts: ['PID 1 · 2 · 3', 'TID 2 · 3 · 4', 'All finished']
		},
		{
			index: '05',
			title: 'From a sector to a real file',
			image: '/images/bmo-x/05-fat32-boot-volume.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X walking AHCI, GPT and FAT32 to read the BOOTX64.EFI header',
			status: 'Complete read chain',
			description:
				'BMO-X mounts the FAT32 partition read-only, enters EFI/BOOT, finds BOOTX64.EFI by its cluster and reads 64 bytes carrying the MZ signature. The test validates the path; it does not claim to verify the complete PE file.',
			facts: ['LBA 2048', 'Cluster 207', 'AHCI → GPT → FAT32']
		},
		{
			index: '06',
			title: 'C stops living inside the kernel',
			image: '/images/bmo-x/06-c-from-estratos.png',
			width: 890,
			height: 562,
			alt: 'BMO-X loading apps/hola.bex from ESTRATOS and running the C program as a task',
			status: 'BEX loaded from disk',
			description:
				'The run command reads apps/hola.bex, verifies the content, admits it as TID 7, and the scheduler executes it on the next tick. Changing the application no longer means recompiling it into the kernel.',
			facts: ['12.00 KiB', 'TID 7', 'C exits cleanly']
		},
		{
			index: '07',
			title: 'The first stratum is born on the disk',
			image: '/images/bmo-x/07-estratos-mounted.png',
			width: 1599,
			height: 899,
			alt: 'BMO-X mounting ESTRATOS generation 1 and listing its root directory',
			status: 'ESTRATOS v1 · reading works',
			description:
				'The kernel finds the volume by its magic, picks a valid superblock, cross-checks the physical identity, and follows the “BMO-DATA nace” stratum until it lists apps, docs and leeme.txt from the root.',
			facts: ['Generation 1', 'Log in block 24', 'Identity matches']
		},
		{
			index: '08',
			title: 'COBOL arrives from ESTRATOS too',
			image: '/images/bmo-x/08-cobol-from-estratos.png',
			width: 718,
			height: 476,
			alt: 'BMO-X reading apps/COBOL.bex from ESTRATOS and running exact decimal',
			status: 'Language → file → process',
			description:
				'The COBOL image is no longer the embedded payload of the early tests: it appears as apps/COBOL.bex, sourced from ESTRATOS, read as 5.02 KiB, admitted independently, with the same correct decimal logic.',
			facts: ['Source: ESTRATOS', '5.02 KiB', '59.97 exact']
		},
		{
			index: '09',
			title: 'The silicon corrects the profile',
			image: '/images/bmo-x/09-xsave-ring3-gate.png',
			width: 1599,
			height: 899,
			alt: "BMO-X diagnostics comparing the Ryzen's real XSAVE area with the static profile",
			status: 'Ring 3 context hardening',
			description:
				'The capture records the finding: FXSAVE was not preserving the full AVX state. The later code uses XSAVE/XRSTOR, reserves the size CPUID reports, and has since been confirmed again on hardware.',
			facts: ['CPUID rules', 'AVX detected', 'Finding fixed afterwards']
		},
		{
			index: '10',
			title: 'COBOL produces a complete banking line',
			image: '/images/bmo-x/10-cobol-extracto-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X running apps/extracto.bex, showing a balance, a protected cheque field and an overdrawn account',
			status: 'Financial semantics on hardware',
			description:
				'extracto.bex is launched from the Ring 3 interface and produces currency formatting, asterisk protection, a negative balance with CR, and an overdraft decision. The amounts are demonstration data; the arithmetic and the formatting are genuinely executed.',
			facts: ['Currency PIC', 'Overdraft IF', 'BEX · Ring 3 · Ryzen']
		},
		{
			index: '11',
			title: 'Ada becomes the third native language',
			image: '/images/bmo-x/11-ada-cierre-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X running apps/cierre.bex, generated by the in-house Ada frontend',
			status: 'Ada executed on hardware',
			description:
				'The BMO Ada frontend generates cierre.bex with no GNAT and no Ada runtime. In Ring 3, a decimal type with delta 0.01 adds three instalments to 59.97, subtracts a refund, and displays 39.98 through the same console gate.',
			facts: ['20/20 tests', '5,112 B', 'Ada · BEF · Ring 3']
		},
		{
			index: '12',
			title: 'The batch close comes back from the disk',
			image: '/images/bmo-x/12-batch-cierre-read-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X reading apps/cierre.txt and showing the batch total 1135.00',
			status: 'Batch result observed on hardware',
			description:
				'The Ring 3 interface opens apps/cierre.txt and recovers 1135.00, the total the COBOL batch tests expect. The capture attests to a physical read of the result; a read after a reboot will close the specific persistence test.',
			facts: ['apps/cierre.txt', '1,135.00 exact', 'Reboot: next test']
		},
		{
			index: '13',
			title: 'The motherboard picks BMO-X like a real system',
			image: '/images/bmo-x/13-uefi-bmo-x-hardware.jpg',
			width: 1280,
			height: 725,
			alt: 'UEFI menu on an MSI board showing BMO-X on the Kingston SSD next to Windows Boot Manager',
			status: 'UEFI entry on a physical disk',
			description:
				"The board's firmware offers BMO-X on the SATA SSD alongside Windows Boot Manager. This photograph carries the physical context that a screen capture or a QEMU window could never carry on its own.",
			facts: ['MSI A320M', 'Kingston SATA', 'UEFI · no hypervisor']
		},
		{
			index: '14',
			title: 'The Ring 3 desktop is now the boot',
			image: '/images/bmo-x/14-desktop-ring3-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X desktop and Run window drawn by gui.bex in Ring 3',
			status: 'Compositor loaded from disk',
			description:
				'gui.bex paints the desktop and its Run window outside the kernel. The screen arrives through a capability: changing the interface no longer means recompiling Ring 0, and the shell can launch other BEX files from disk.',
			facts: ['gui.bex', 'Framebuffer capability', 'Interactive Ring 3']
		},
		{
			index: '15',
			title: 'The system explains itself from the inside',
			image: '/images/bmo-x/15-info-zen3-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'BMO-X info panel showing Ryzen Zen 3, memory, processes and disk status',
			status: 'Telemetry from the real Ryzen',
			description:
				'The info view identifies Zen 3, six physical cores, twelve threads, a measured frequency, memory, and the programs launched. It is not a marketing figure: it is the system describing the bench it is running on.',
			facts: ['Ryzen 5 5600X', '6C / 12T', '14.8 GiB detected']
		},
		{
			index: '16',
			title: 'C runs arithmetic, text and control flow',
			image: '/images/bmo-x/16-c-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'holac.bex, generated by BMO C, showing arithmetic, strings and hexadecimal on the Ryzen',
			status: 'BMO C executed on silicon',
			description:
				'holac.bex walks a loop, operates on signed integers, divides, computes a modulus, and prints strings and hexadecimal. The same screen keeps its FAT32 provenance and states why it cannot carry the ESTRATOS integrity attribute there.',
			facts: ['sum 1..10 = 55', 'string=alive', 'hex=beef']
		},
		{
			index: '17',
			title: 'COBOL holds a conversation with a person',
			image: '/images/bmo-x/17-cobol-accept-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'COBOL calculator in BMO-X reading two amounts and showing exact addition and subtraction',
			status: 'ACCEPT + exact decimal on the Ryzen',
			description:
				'calc.bex takes 5 and 90 from the console of the process that launched it, and answers 95.00 and −85.00. The program does not need to seize the keyboard: it reads through its console capability, which keeps physical input separate from the COBOL logic.',
			facts: ['ACCEPT', '95.00 exact', 'KIND_CONSOLE']
		},
		{
			index: '18',
			title: 'When a process dies, the screen comes back',
			image: '/images/bmo-x/18-cabina-revocacion-hardware.jpg',
			width: 1599,
			height: 899,
			alt: 'CABINA logging that the Ring 3 owner of the framebuffer died and the kernel reclaimed the screen',
			status: 'Revocation observed on hardware',
			description:
				'CABINA logs the handover of screen, mouse and console; then warns that the framebuffer owner died and returns the panel to the kernel. This is a particularly valuable test: it shows recovery from failure, not just the happy path.',
			facts: ['revoke_all', 'lost events = 0', 'Ring 3 isolated']
		}
	]
};
