<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Copy } from './i18n/es';

	let { copy, lang }: { copy: Copy; lang: 'es' | 'en' } = $props();

	// Dominio final del sitio. Las tarjetas de LinkedIn, X y Slack necesitan URLs
	// absolutas: si esto no coincide con el dominio real, se comparte sin imagen.
	const SITE_URL = 'https://eddisalazar.vercel.app';
	const OG_IMAGE = `${SITE_URL}/images/bmo-x/14-desktop-ring3-hardware.jpg`;

	// Cada idioma es una URL propia y prerenderizada, no un estado de JavaScript:
	// asi Google indexa las dos y el enlace en ingles se puede compartir tal cual.
	// Derivados y no constantes: al navegar de / a /en el router reusa este
	// componente, y una constante se quedaria con el idioma de la primera carga.
	const pageUrl = $derived(lang === 'es' ? SITE_URL : `${SITE_URL}/en`);
	const altLang = $derived(lang === 'es' ? 'en' : 'es');
	const switchHref = $derived(lang === 'es' ? resolve('/en') : resolve('/'));

	const strengthIcons: Record<string, string> = { '01': '全', '02': '責', '03': '証', '04': '簡' };

	let menuOpen = $state(false);

	// El HTML prerenderizado ya trae el `lang` correcto (hooks.server.ts), pero al
	// cambiar de idioma el router de SvelteKit sustituye el contenido sin tocar
	// <html>. Sin esto, tras pulsar el conmutador un lector de pantalla leeria el
	// español con voz inglesa.
	$effect(() => {
		document.documentElement.lang = lang;
	});

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
	<title>{copy.meta.title}</title>
	<meta name="description" content={copy.meta.description} />
	<meta name="theme-color" content="#0b0b0a" />
	<link rel="canonical" href={pageUrl} />
	<link rel="alternate" hreflang="es" href={SITE_URL} />
	<link rel="alternate" hreflang="en" href={`${SITE_URL}/en`} />
	<link rel="alternate" hreflang="x-default" href={SITE_URL} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:site_name" content="Eddi Andreé Salazar" />
	<meta property="og:locale" content={copy.locale} />
	<meta property="og:locale:alternate" content={altLang === 'en' ? 'en_US' : 'es_PE'} />
	<meta property="og:title" content={copy.meta.ogTitle} />
	<meta property="og:description" content={copy.meta.ogDescription} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:image:width" content="1599" />
	<meta property="og:image:height" content="899" />
	<meta property="og:image:alt" content={copy.meta.ogImageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={copy.meta.ogTitle} />
	<meta name="twitter:description" content={copy.meta.ogDescription} />
	<meta name="twitter:image" content={OG_IMAGE} />
</svelte:head>

<div class="site-shell">
	<header class="topbar">
		<a class="brand" href="#inicio" aria-label={copy.nav.home}>
			<span class="brand-seal" aria-hidden="true">工</span>
			<span><b>Eddi Salazar</b><small>{copy.nav.role}</small></span>
		</a>

		<nav class:open={menuOpen} aria-label={copy.nav.main}>
			<a href="#valor" onclick={() => (menuOpen = false)}>{copy.nav.value}</a>
			<a href="#bmo" onclick={() => (menuOpen = false)}>{copy.nav.bmo}</a>
			<a href="#proyectos" onclick={() => (menuOpen = false)}>{copy.nav.projects}</a>
			<a href="#contacto" onclick={() => (menuOpen = false)}>{copy.nav.contact}</a>
			<a href="https://github.com/AndreeSalazar" target="_blank" rel="noreferrer"
				>{copy.nav.github}</a
			>
			<a
				class="lang-switch"
				href={switchHref}
				hreflang={altLang}
				lang={altLang}
				aria-label={copy.switchToLabel}
				onclick={() => (menuOpen = false)}>{copy.switchTo}</a
			>
		</nav>

		<button
			class="menu-button"
			type="button"
			aria-label={copy.nav.openMenu}
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
				<span>大道至简</span><small>{copy.hero.sealCaption}</small>
			</div>

			<div class="hero-copy">
				<p class="eyebrow"><span></span> {copy.hero.eyebrow}</p>
				<h1 id="hero-title">
					{copy.hero.titleA}<br />
					{copy.hero.titleB} <em>{copy.hero.titleEm}</em>
				</h1>
				<p class="hero-lead">{copy.hero.lead}</p>
				<div class="hero-proof" aria-label={copy.hero.proofLabel}>
					{#each copy.hero.proof as item, i (item)}
						<span><i>0{i + 1}</i> {item}</span>
					{/each}
				</div>
				<div class="hero-actions">
					<a class="button primary" href="#bmo">{copy.hero.ctaPrimary} <span>↘</span></a>
					<a class="button ghost" href="#proyectos">{copy.hero.ctaGhost}</a>
				</div>
			</div>

			<div class="hero-aside">
				<div class="ensō" aria-hidden="true"><span>系</span></div>
				<p><b>{copy.hero.asideCount}</b> {copy.hero.asideLabel}</p>
				<div class="aside-line"></div>
				<p class="mono">RUST · C · C++ · ASM<br />X86-64 · GPU · BARE METAL</p>
			</div>

			<div class="hero-foot">
				<span>{copy.hero.scroll}</span>
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
			<div class="section-kicker" data-reveal><span>序</span> {copy.profile.kicker}</div>
			<div class="statement-grid" data-reveal>
				<h2>{copy.profile.titleA}<br /><i>{copy.profile.titleEm}</i></h2>
				<div>
					<p class="large-copy">{copy.profile.large}</p>
					<p>{copy.profile.body}</p>
				</div>
			</div>

			<div class="numbers" aria-label={copy.profile.numbersLabel} data-reveal>
				{#each copy.profile.numbers as number (number.line1)}
					<div>
						<strong
							>{number.value}{#if number.sup}<sup>{number.sup}</sup>{/if}</strong
						><span>{number.line1}<br />{number.line2}</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="value-section section-pad" id="valor">
			<div class="value-heading" data-reveal>
				<div>
					<div class="section-kicker light"><span>能</span> {copy.value.kicker}</div>
					<h2>{copy.value.titleA}<br />{copy.value.titleB} <i>{copy.value.titleEm}</i></h2>
				</div>
				<div class="recruiter-note">
					<span>{copy.value.noteLabel}</span>
					<p>{copy.value.note}</p>
				</div>
			</div>

			<div class="strength-grid" data-reveal>
				{#each copy.value.strengths as strength (strength.number)}
					<article>
						<span>{strength.number}</span>
						<div class="strength-icon" aria-hidden="true">{strengthIcons[strength.number]}</div>
						<h3>{strength.title}</h3>
						<p>{strength.text}</p>
					</article>
				{/each}
			</div>

			<div class="role-fit" data-reveal>
				<span>{copy.value.fitLabel}</span>
				{#each copy.value.fit as item, i (item)}
					{#if i > 0}<i></i>{/if}
					<p>{item}</p>
				{/each}
			</div>
		</section>

		<section class="bmo-section section-pad" id="bmo">
			<div class="bmo-head" data-reveal>
				<div>
					<div class="section-kicker light"><span>壹</span> {copy.bmo.kicker}</div>
					<h2>BMO-X</h2>
					<p class="bmo-subtitle">{copy.bmo.subtitle}</p>
				</div>
				<div class="bmo-head-actions">
					<div class="status-badge"><i></i> {copy.bmo.badge}</div>
					<a href="https://github.com/AndreeSalazar/BMO-X" target="_blank" rel="noreferrer"
						>{copy.bmo.repoLink} <span>↗</span></a
					>
				</div>
			</div>

			<div class="bmo-intro" data-reveal>
				<p class="bmo-quote">
					{copy.bmo.quoteA} <em>{copy.bmo.quoteEm}</em>
					{copy.bmo.quoteB}
				</p>
				<p>{copy.bmo.intro}</p>
			</div>

			<div class="bmo-why" data-reveal>
				{#each copy.bmo.why as item, i (item.label)}
					<article class:featured={i === 1}>
						<span>{item.label}</span>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</article>
				{/each}
			</div>

			<div class="bmo-impact" data-reveal>
				<div class="impact-heading">
					<span>{copy.bmo.impactLabel}</span>
					<h3>{copy.bmo.impactTitle}</h3>
					<p>{copy.bmo.impactText}</p>
				</div>
				<div class="impact-list">
					{#each copy.bmo.impact as item, i (item.title)}
						<article>
							<b>0{i + 1}</b>
							<div>
								<h4>{item.title}</h4>
								<p>{item.text}</p>
							</div>
						</article>
					{/each}
				</div>
				<div class="impact-honesty">
					<i></i>
					<p><strong>{copy.bmo.honestyLabel}</strong> {copy.bmo.honestyText}</p>
				</div>
			</div>

			<div class="technical-divider" data-reveal>
				<span>{copy.bmo.syscallDivider}</span>
			</div>
			<div class="syscall-strip" data-reveal>
				{#each copy.bmo.syscalls as call, i (call.name)}
					<div><span>0{i + 1}</span><b>{call.name}</b><small>{call.text}</small></div>
				{/each}
			</div>

			<div class="language-strategy" data-reveal>
				<header>
					<div class="card-label">{copy.bmo.langLabel}</div>
					<h3>{copy.bmo.langTitleA}<br /><em>{copy.bmo.langTitleEm}</em></h3>
					<p>{copy.bmo.langLead}</p>
				</header>
				<div class="language-grid">
					{#each copy.bmo.languages as item, i (item.name)}
						<article class:featured={i === 1}>
							<span>{item.tag}</span><b>{item.name}</b>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
							<small>{item.note}</small>
						</article>
					{/each}
				</div>
				<footer>
					<b>{copy.bmo.langFooterLabel}</b><span>{copy.bmo.langFooterText}</span>
				</footer>
			</div>

			<div class="bmo-details" data-reveal>
				<div class="architecture-card">
					<div class="card-label">{copy.bmo.flowLabel}</div>
					<div class="flow">
						{#each copy.bmo.flow as step, i (step.name)}
							{#if i > 0}<i>↓</i>{/if}
							<div class:accent={i === copy.bmo.flow.length - 1}>
								<small>0{i + 1}</small><b>{step.name}</b><span>{step.text}</span>
							</div>
						{/each}
					</div>
				</div>

				<div class="status-card">
					<div class="card-label">{copy.bmo.statusLabel}</div>
					<ul>
						{#each copy.bmo.status as item (item[0])}
							<li>
								<i class={item[2]}></i><span>{item[0]}</span><small>{item[1]}</small>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="verification-ledger" data-reveal>
				<header>
					<div class="card-label">{copy.bmo.ledgerLabel}</div>
					<h3>{copy.bmo.ledgerTitleA}<br /><em>{copy.bmo.ledgerTitleEm}</em></h3>
					<p>{copy.bmo.ledgerLead}</p>
				</header>
				<div class="verification-states">
					{#each copy.bmo.ledger as item, i (item.name)}
						<article class={i === 0 ? 'metal' : i === 1 ? 'software' : 'design'}>
							<span>{item.tag}</span><b>{item.name}</b>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</article>
					{/each}
				</div>
				<footer>
					<strong>544</strong><span>{copy.bmo.ledgerFooter}</span>
				</footer>
			</div>

			<div class="cobol-callout" data-reveal>
				<div class="cobol-title">
					<span>{copy.bmo.cobolLabel}</span>
					<h3>BMO COBOL</h3>
				</div>
				<p>{copy.bmo.cobolText}</p>
				<div class="cobol-metrics">
					{#each copy.bmo.cobolMetrics as metric (metric.label)}
						<div><b>{metric.value}</b><span>{metric.label}</span></div>
					{/each}
				</div>
			</div>

			<div class="batch-feature" data-reveal>
				<div class="batch-copy">
					<div class="card-label">{copy.bmo.batchLabel}</div>
					<span class="batch-state"><i></i> {copy.bmo.batchState}</span>
					<h3>{copy.bmo.batchTitleA}<br /><em>{copy.bmo.batchTitleEm}</em></h3>
					<p>
						{copy.bmo.batchTextA}
						<strong>batch.cob</strong>
						{copy.bmo.batchTextB}
					</p>
					<div class="batch-result">
						<small>{copy.bmo.batchResultLabel}</small>
						<b>1,000.00 + 234.56 + 0.44 − 100.00</b>
						<strong>$1,135.00</strong>
					</div>
				</div>
				<div class="batch-flow" aria-label={copy.bmo.batchFlowLabel}>
					{#each copy.bmo.batchFlow as step, i (step.name)}
						{#if i > 0}<i>↓</i>{/if}
						<div><span>0{i + 1}</span><b>{step.name}</b><small>{step.text}</small></div>
					{/each}
					<footer><b>KIND_ARCHIVO</b><span>{copy.bmo.batchFlowFooter}</span></footer>
				</div>
			</div>

			<div class="ada-feature" data-reveal>
				<div class="ada-heading">
					<div class="card-label">{copy.bmo.adaLabel}</div>
					<span>{copy.bmo.adaTag}</span>
					<h3>{copy.bmo.adaTitleA}<br /><em>{copy.bmo.adaTitleEm}</em></h3>
					<p>{copy.bmo.adaText}</p>
					<ul>
						{#each copy.bmo.adaStats as stat (stat.label)}
							<li><b>{stat.value}</b><span>{stat.label}</span></li>
						{/each}
					</ul>
				</div>
				<div class="ada-code" aria-label={copy.bmo.adaCodeLabel}>
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
					<div class="card-label">{copy.bmo.sourceLabel}</div>
					<h3>{copy.bmo.sourceTitleA}<br /><i>{copy.bmo.sourceTitleEm}</i></h3>
					<p>{copy.bmo.sourceText}</p>
				</div>
				<div class="source-code" aria-label={copy.bmo.sourceCodeLabel}>
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
				{#each copy.bmo.cobolPrograms as program, index (program.name)}
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
						<span>证</span>
						{copy.bmo.evidenceKicker}
					</div>
					<h3>{copy.bmo.evidenceTitleA}<br /><i>{copy.bmo.evidenceTitleEm}</i></h3>
				</div>
				<p>{copy.bmo.evidenceLead}</p>
			</div>

			<div class="hardware-gallery">
				{#each copy.evidence as evidence (evidence.index)}
					<figure class:featured={evidence.index === '01'} class="evidence-card" data-reveal>
						<div class="evidence-photo">
							<img
								src={evidence.image}
								alt={evidence.alt}
								loading="lazy"
								width={evidence.width}
								height={evidence.height}
							/>
							<span>{evidence.index} · {copy.bmo.evidenceBadge}</span>
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
					<span>{copy.bmo.boundaryYes}</span>
					<p>{copy.bmo.boundaryYesText}</p>
				</div>
				<div>
					<span>{copy.bmo.boundaryNo}</span>
					<p>{copy.bmo.boundaryNoText}</p>
				</div>
			</div>

			<section class="strata-feature" aria-labelledby="strata-title">
				<div class="strata-intro" data-reveal>
					<div>
						<div class="section-kicker light">
							<span>层</span>
							{copy.strata.kicker}
						</div>
						<p class="strata-status"><i></i> {copy.strata.status}</p>
					</div>
					<h3 id="strata-title">ESTRATOS</h3>
					<p class="strata-lead">
						{copy.strata.leadA}
						<strong>{copy.strata.leadStrong}</strong>
					</p>
				</div>

				<div class="strata-concept" data-reveal>
					<div class="strata-visual" aria-label={copy.strata.visualLabel}>
						{#each copy.strata.layers as layer, i (layer.name)}
							<div
								class="stratum {['stratum-four', 'stratum-three', 'stratum-two', 'stratum-one'][i]}"
							>
								<span>0{4 - i}</span><b>{layer.name}</b><small>{layer.text}</small><i></i>
							</div>
						{/each}
						<div class="strata-axis"><span>{copy.strata.axis}</span><i></i></div>
					</div>

					<div class="strata-story">
						<div class="card-label">{copy.strata.storyLabelA}</div>
						<h4>{copy.strata.storyTitleA}<br /><i>{copy.strata.storyTitleEm}</i></h4>
						<p>{copy.strata.storyTextA}</p>
						<div class="card-label">{copy.strata.storyLabelB}</div>
						<p>
							{copy.strata.storyTextB1}
							<strong>sellar</strong>
							{copy.strata.storyTextB2}
						</p>
						<div class="strata-transaction">
							{#each copy.strata.transaction as step, i (step)}
								{#if i > 0}<i>→</i>{/if}
								<span><b>0{i + 1}</b> {step}</span>
							{/each}
						</div>
					</div>
				</div>

				<div class="strata-value" data-reveal>
					{#each copy.strata.values as item (item.tag)}
						<article>
							<span>{item.tag}</span>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</article>
					{/each}
				</div>

				<div class="bex-anatomy" data-reveal>
					<div class="bex-copy">
						<span>{copy.strata.bexLabel}</span>
						<h4>{copy.strata.bexTitleA}<br /><i>{copy.strata.bexTitleEm}</i></h4>
						<p>{copy.strata.bexText}</p>
					</div>
					<div class="bex-object">
						<header>
							<i></i><b>hola_COBOL.bex</b><small>{copy.strata.bexObjectLabel}</small>
						</header>
						{#each copy.strata.bexFields as field (field.key)}
							<div>
								<span>{field.key}</span>
								<p>{field.text}</p>
								<i>{field.tag}</i>
							</div>
						{/each}
					</div>
				</div>

				<div class="strata-roadmap" data-reveal>
					<div class="roadmap-heading">
						<span>{copy.strata.roadmapLabel}</span>
						<h4>{copy.strata.roadmapTitleA}<br /><i>{copy.strata.roadmapTitleEm}</i></h4>
						<p>{copy.strata.roadmapText}</p>
					</div>
					<ol>
						{#each copy.strata.roadmap as step, i (step.name)}
							<li class={step.state}>
								<b>0{i + 1}</b><span>{step.name}</span><small>{step.text}</small>
							</li>
						{/each}
					</ol>
				</div>

				<div class="strata-honesty" data-reveal>
					<strong>{copy.strata.honestyLabel}</strong>
					<p>
						<strong>{copy.strata.honestyStrong}</strong>
						{copy.strata.honestyText}
					</p>
					<span>{copy.strata.honestyBadge}</span>
				</div>
			</section>

			<div class="platform-frontier" data-reveal>
				<header>
					<span>{copy.bmo.frontierLabel}</span>
					<h3>{copy.bmo.frontierTitleA}<br /><i>{copy.bmo.frontierTitleEm}</i></h3>
				</header>
				{#each copy.bmo.frontier as item (item.tag)}
					<article>
						<small>{item.tag}</small>
						<h4>{item.title}</h4>
						<p>{item.text}</p>
					</article>
				{/each}
			</div>

			<p class="evidence-note">
				<span>{copy.bmo.noteLabel}</span>
				{copy.bmo.noteText}
			</p>
		</section>

		<section class="projects section-pad" id="proyectos">
			<div class="projects-head" data-reveal>
				<div>
					<div class="section-kicker"><span>作</span> {copy.projects.kicker}</div>
					<h2>{copy.projects.titleA}<br /><i>{copy.projects.titleEm}</i></h2>
				</div>
				<p>{copy.projects.lead}</p>
			</div>

			<div class="project-list">
				{#each copy.projects.items as project (project.name)}
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
								<p class="project-problem">
									<span>{copy.projects.problemLabel}</span>{project.problem}
								</p>
								<p class="project-purpose">
									<span>{copy.projects.purposeLabel}</span>{project.purpose}
								</p>
							</div>
							<div class="project-story">
								<p class="project-description">{project.description}</p>
								<p class="project-value">
									<span>{copy.projects.valueLabel}</span>{project.value}
								</p>
							</div>
						</div>
						<div class="project-bottom">
							<div class="tags">
								{#each project.tags as tag (tag)}<span>{tag}</span>{/each}
							</div>
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a class="repo-link" href={project.url} target="_blank" rel="noreferrer"
								>{copy.projects.repoLink} <span>↗</span></a
							>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="github-proof section-pad" id="github">
			<div class="github-head" data-reveal>
				<div>
					<div class="section-kicker light"><span>证</span> {copy.github.kicker}</div>
					<h2>{copy.github.titleA}<br /><i>{copy.github.titleEm}</i></h2>
				</div>
				<div class="github-profile-card">
					<span class="github-mark" aria-hidden="true">&lt;/&gt;</span>
					<div>
						<small>GITHUB.COM</small><b>@AndreeSalazar</b>
						<p>{copy.github.cardNote}</p>
					</div>
					<a href="https://github.com/AndreeSalazar" target="_blank" rel="noreferrer"
						>{copy.github.cardLink}</a
					>
				</div>
			</div>

			<div class="public-proof" data-reveal>
				<div class="proof-summary">
					<strong>45</strong>
					<span>{copy.github.summaryLabel}</span>
					<p>{copy.github.summaryText}</p>
				</div>
				<div class="proof-repos">
					{#each copy.github.repos as repo (repo.name)}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a class:flagship={repo.flagship} href={repo.url} target="_blank" rel="noreferrer"
							><span>{repo.tag}</span><b>{repo.name}</b>
							<p>{repo.text}</p>
							<small>{repo.stack}</small><i>↗</i></a
						>
					{/each}
				</div>
			</div>

			<div class="proof-disclosure" data-reveal>
				<span>{copy.github.disclosureLabel}</span>
				<p>{copy.github.disclosureText}</p>
			</div>
		</section>

		<section class="expertise section-pad">
			<div class="section-kicker light" data-reveal><span>器</span> {copy.expertise.kicker}</div>
			<div class="expertise-grid" data-reveal>
				<div>
					<h2>
						{copy.expertise.titleA}<br />{copy.expertise.titleB}
						<i>{copy.expertise.titleEm}</i>
					</h2>
					<p>{copy.expertise.lead}</p>
				</div>
				<div class="skill-list">
					{#each copy.expertise.skills as skill, i (skill.label)}
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
				<div class="section-kicker"><span>法</span> {copy.method.kicker}</div>
				<h2>{copy.method.titleA}<br />{copy.method.titleB} <i>{copy.method.titleEm}</i></h2>
				<p>{copy.method.lead}</p>
			</div>
			<div class="method-track" data-reveal>
				{#each copy.method.steps as step, i (step.name)}
					<article>
						<span>0{i + 1}</span>
						<div>
							<b>{step.name}</b>
							<p>{step.text}</p>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="credentials section-pad">
			<div class="credentials-grid" data-reveal>
				<div>
					<div class="section-kicker"><span>学</span> {copy.credentials.kicker}</div>
					<h2>{copy.credentials.titleA}<br /><i>{copy.credentials.titleEm}</i></h2>
					<p class="credentials-note">{copy.credentials.note}</p>
				</div>
				<div class="timeline">
					{#each copy.credentials.items as item (item.title)}
						<div class="timeline-item" class:featured={item.featured}>
							<span>{item.period}</span>
							<div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="contact section-pad" id="contacto">
			<div class="contact-character" aria-hidden="true">合</div>
			<div class="section-kicker light"><span>信</span> {copy.contact.kicker}</div>
			<h2 data-reveal>{copy.contact.titleA}<br /><i>{copy.contact.titleEm}</i></h2>
			<p>{copy.contact.lead}</p>
			<a
				class="button primary large"
				href="mailto:?subject={encodeURIComponent(copy.contact.mailSubject)}"
			>
				{copy.contact.cta} <span>↗</span>
			</a>
			<small class="contact-note">{copy.contact.note}</small>
		</section>
	</main>

	<footer>
		<div class="brand footer-brand">
			<span class="brand-seal" aria-hidden="true">工</span>
			<span><b>Eddi Andreé Salazar Matos</b><small>{copy.footer.role}</small></span>
		</div>
		<p>{copy.footer.place} <span>·</span> {copy.footer.note}</p>
		<a href="#inicio">{copy.footer.top}</a>
	</footer>
</div>
