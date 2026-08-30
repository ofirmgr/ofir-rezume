'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Box,
  Code,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const missions = [
  {
    id: 'panorays',
    level: 'LVL 04',
    title: 'Panorays',
    period: '2023 - NOW',
    role: 'Senior Fullstack Developer',
    summary: 'Scaling a high-traffic cyber-risk platform across React, Node.js and cloud-native microservices.',
    feats: ['Module Federation micro-frontends', 'NestJS + Kafka + RabbitMQ', 'Argo CI/CD on GCP', 'Memory leak and query-plan hunts'],
  },
  {
    id: 'att',
    level: 'LVL 03',
    title: 'AT&T Israel',
    period: '2012 - 2023',
    role: 'Senior Fullstack Developer',
    summary: 'A decade building mobile, backend and observability systems at telecom scale.',
    feats: ['Node.js services for 30M users', 'React Native customer app', '5G monitoring with Java + Elasticsearch', 'Azure Functions webhook platform'],
  },
  {
    id: 'foundations',
    level: 'LVL 02',
    title: 'BDI + Banking',
    period: '2006 - 2012',
    role: 'Fullstack Developer',
    summary: 'Enterprise CRM, web infrastructure and SQL performance work across finance teams.',
    feats: ['CRM Dynamics', 'JavaScript + jQuery', 'Server-side development', 'SQL Server optimization'],
  },
  {
    id: 'origin',
    level: 'LVL 01',
    title: 'Origin Story',
    period: '2005 - 2006',
    role: 'JavaScript & C# Developer',
    summary: 'First shipped chapter: .NET and web development for Microsoft Israel’s Hinuchi-net.',
    feats: ['C# + .NET', 'Production web delivery', 'Education technology', 'The quest begins'],
  },
];

const projects = [
  {
    name: 'codex-rtl',
    type: 'Developer Tool',
    stack: 'TypeScript · VS Code · esbuild',
    description: 'Live RTL support for the Codex panel, with per-block language detection, safe code isolation and reversible runtime injection.',
    href: 'https://github.com/ofirmgr/codex-rtl',
    accent: 'mint',
  },
  {
    name: 'sync-folder',
    type: 'Android + Cloud',
    stack: 'Kotlin · Compose · Drive API',
    description: 'One-way folder sync to Google Drive with OAuth, WorkManager, Room and reliable background scheduling.',
    href: 'https://github.com/ofirmgr/sync-folder',
    accent: 'coral',
  },
  {
    name: 'anyconnect-vpn-tester',
    type: 'Network Utility',
    stack: 'Kotlin · Networking',
    description: 'Cross-platform utility that finds and ranks the quickest Cisco AnyConnect endpoint by latency.',
    href: 'https://github.com/ofirmgr/anyconnect-vpn-tester',
    accent: 'cream',
  },
  {
    name: 'web-crawler',
    type: 'Data Pipeline',
    stack: 'TypeScript · MongoDB · Docker',
    description: 'Containerized Pastebin crawler that turns discovered pages into timestamped, structured records.',
    href: 'https://github.com/ofirmgr/web-crawler',
    accent: 'blue',
  },
];

const loadout = [
  ['Frontend', 'React, TypeScript, Angular, Storybook, Material UI'],
  ['Backend', 'Node.js, NestJS, Java, Kotlin, Python'],
  ['Data', 'PostgreSQL, MongoDB, Redis, Elasticsearch'],
  ['Systems', 'Kafka, RabbitMQ, Docker, Kubernetes, Linux'],
  ['Cloud', 'GCP, Azure, Argo CI/CD, Bash'],
  ['Testing', 'Gherkin, Cucumber, Protractor, Postman'],
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const [started, setStarted] = useState(false);
  const [missionIndex, setMissionIndex] = useState(0);
  const mission = missions[missionIndex];

  const changeMission = (direction: number) => {
    setStarted(true);
    setMissionIndex((current) => (current + direction + missions.length) % missions.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowRight', 'd', 'D'].includes(event.key)) changeMission(1);
      if (['ArrowLeft', 'a', 'A'].includes(event.key)) changeMission(-1);
      if (event.key === 'Enter') setStarted(true);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-background p-3 text-foreground sm:p-5">
      <div className="game-shell mx-auto max-w-[1500px] overflow-hidden border-2 border-border bg-card">
        <header className="flex min-h-16 flex-wrap items-center justify-between gap-4 border-b-2 border-border px-4 py-3 sm:px-6">
          <a className="flex items-center gap-3" href="#top" aria-label="Ofir Meguri - top">
            <span className="status-light" aria-hidden="true" />
            <div>
              <p className="pixel-label text-primary">PLAYER 01 / ONLINE</p>
              <h1 className="text-lg font-black tracking-[-0.04em] sm:text-xl">OFIR.EXE</h1>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="hover:text-primary" href="#career">Career map</a>
            <a className="hover:text-primary" href="#projects">Side quests</a>
            <a className="hover:text-primary" href="#loadout">Loadout</a>
          </nav>
          <a className="game-link" href="https://github.com/ofirmgr" rel="noreferrer" target="_blank">
            <GitBranch className="size-4" /> GitHub
          </a>
        </header>

        <section id="top" className="grid min-h-[calc(100vh-6.75rem)] scroll-mt-4 grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)_310px]">
          <aside className="border-b-2 border-border bg-secondary/35 p-5 lg:border-b-0 lg:border-r-2">
            <p className="pixel-label mb-5 text-muted-foreground">CHARACTER SELECTED</p>
            <div className="mb-5 flex items-end gap-4 border-b border-border pb-5">
              <div className="avatar-token" aria-label="Ofir Meguri avatar">OM</div>
              <div>
                <p className="text-2xl font-black tracking-[-0.06em]">OFIR</p>
                <p className="text-sm font-semibold text-primary">Senior Fullstack</p>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <Stat label="Architecture" value="96" />
              <Stat label="Deep debugging" value="99" />
              <Stat label="React / Node.js" value="98" />
              <Stat label="Team empathy" value="94" />
            </div>
            <div className="mt-7 border border-border bg-card p-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em]">
                <ShieldCheck className="size-4 text-primary" /> Passive skill
              </p>
              <p className="text-sm leading-6 text-muted-foreground">Turns complex systems into calm, reliable products.</p>
            </div>
            <div className="mt-5 flex items-start gap-3 font-mono text-[10px] leading-5 text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              RISHON LEZION, ISRAEL<br />HEBREW + ENGLISH
            </div>
          </aside>

          <div className="relative min-h-[650px] overflow-hidden bg-[#090d19] text-white">
            <Image
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover opacity-60"
              src={`${basePath}/og.png`}
              alt="Pixel-art Ofir in a neon fullstack game world"
            />
            <div className="stage-shade absolute inset-0" aria-hidden="true" />
            <div className="relative z-10 flex min-h-[650px] flex-col p-4 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="pixel-label text-[#7ef2c5]">CURRENT WORLD</p>
                  <h2 className="mt-2 max-w-xl text-4xl font-black tracking-[-0.065em] sm:text-6xl">FULLSTACK QUEST</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">Explore 18+ years of products, distributed systems and hard problems shipped.</p>
                </div>
                <span className="border border-white/20 bg-[#07101d]/75 px-3 py-2 font-mono text-[11px] text-white/65">MAP 01 · CAREER MODE</span>
              </div>

              <div className="mt-auto">
                <div className="mb-5 grid grid-cols-4 gap-2" aria-label="Career map">
                  {missions.map((item, index) => (
                    <button
                      key={item.id}
                      className={`map-node ${index === missionIndex && started ? 'is-active' : ''}`}
                      onClick={() => { setMissionIndex(index); setStarted(true); }}
                      aria-pressed={index === missionIndex && started}
                    >
                      <span>{item.level}</span>
                      <b>{item.period.split(' - ')[0]}</b>
                    </button>
                  ))}
                </div>
                <div className="border border-white/20 bg-[#07101d]/90 p-4 backdrop-blur-sm sm:p-5">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#7ef2c5]">{started ? `Quest active · ${mission.title}` : 'New quest available'}</p>
                      <p className="mt-1 max-w-xl text-sm text-white/60">{started ? mission.summary : 'Press Enter or Start. Use A/D or arrow keys to move through the career map.'}</p>
                    </div>
                    <div className="flex gap-2">
                      {started && <Button aria-label="Previous mission" variant="outline" size="icon-lg" className="rounded-none border-white/25 bg-transparent text-white hover:bg-white/10" onClick={() => changeMission(-1)}><ArrowLeft /></Button>}
                      <Button className="h-9 rounded-none bg-[#7ef2c5] px-4 font-black text-[#07110d] hover:bg-white" onClick={() => setStarted(true)}>
                        <Play data-icon="inline-start" className="fill-current" />{started ? 'RUNNING' : 'START RUN'}
                      </Button>
                      {started && <Button aria-label="Next mission" variant="outline" size="icon-lg" className="rounded-none border-white/25 bg-transparent text-white hover:bg-white/10" onClick={() => changeMission(1)}><ArrowRight /></Button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="border-t-2 border-border p-5 lg:border-l-2 lg:border-t-0">
            <p className="pixel-label mb-5 text-muted-foreground">MISSION BRIEF</p>
            <span className="inline-block bg-primary px-2 py-1 font-mono text-[10px] font-black text-primary-foreground">{mission.level} · {mission.period}</span>
            <h3 className="mt-4 text-3xl font-black leading-none tracking-[-0.055em]">{mission.title}</h3>
            <p className="mt-2 text-sm font-bold text-primary">{mission.role}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{mission.summary}</p>
            <div className="my-6 h-px bg-border" />
            <p className="pixel-label mb-3 text-muted-foreground">UNLOCKED FEATS</p>
            <ul className="space-y-3">
              {mission.feats.map((feat) => <li key={feat} className="flex gap-3 text-sm font-semibold leading-5"><Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />{feat}</li>)}
            </ul>
            <div className="mt-7 border-l-2 border-primary pl-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-primary">Legendary feat</p>
              <p className="mt-2 text-sm font-semibold leading-6">Backend systems serving 30M users.</p>
            </div>
          </aside>
        </section>

        <section id="career" className="scroll-mt-4 border-t-2 border-border bg-[#f8f7ea] p-5 sm:p-8 lg:p-12">
          <SectionHeading kicker="MAIN CAMPAIGN" title="18+ years. Four worlds. One continuous build." icon={<Trophy />} />
          <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {missions.slice().reverse().map((item, index) => (
              <article key={item.id} className="group bg-card p-5 transition-colors hover:bg-secondary">
                <div className="mb-10 flex items-center justify-between font-mono text-[10px] font-black tracking-[0.12em] text-muted-foreground">
                  <span>CHAPTER 0{index + 1}</span><span>{item.period}</span>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.05em]">{item.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-primary">{item.role}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-4 border-t-2 border-border bg-[#101624] p-5 text-white sm:p-8 lg:p-12">
          <SectionHeading kicker="SIDE QUESTS · PUBLIC GITHUB" title="Tools built because the problem was worth solving." icon={<Box />} dark />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <a key={project.name} className={`project-card accent-${project.accent}`} href={project.href} rel="noreferrer" target="_blank">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] font-black tracking-[0.14em] text-white/50">SIDE QUEST 0{index + 1}</span>
                  <ExternalLink className="size-4" />
                </div>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.12em] text-[#7ef2c5]">{project.type}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.045em]">{project.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">{project.description}</p>
                <p className="mt-6 border-t border-white/15 pt-4 font-mono text-xs text-white/50">{project.stack}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="loadout" className="scroll-mt-4 grid border-t-2 border-border lg:grid-cols-[1fr_0.72fr]">
          <div className="p-5 sm:p-8 lg:p-12">
            <SectionHeading kicker="INVENTORY" title="Production-ready loadout." icon={<Code />} />
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {loadout.map(([group, items]) => (
                <div key={group} className="bg-card p-5">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.12em] text-primary">{group}</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">{items}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="border-t-2 border-border bg-primary p-5 text-primary-foreground sm:p-8 lg:border-l-2 lg:border-t-0 lg:p-12">
            <Award className="size-10" />
            <p className="pixel-label mt-8">ACADEMY RECORD</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.055em]">Computer Science + Psychology</h2>
            <p className="mt-2 text-sm font-bold">B.A. · The Open University of Israel</p>
            <div className="my-8 h-px bg-primary-foreground/30" />
            <p className="pixel-label">SPECIAL TRAINING</p>
            <ul className="mt-4 space-y-3 text-sm font-bold">
              <li>Secure Coding</li><li>Apache Spark & Performance</li><li>Cloudera Data Analyst</li><li>Electronics & Computer Technician</li>
            </ul>
          </aside>
        </section>

        <footer className="flex flex-col items-start justify-between gap-5 border-t-2 border-border bg-[#ecebdc] p-5 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="pixel-label text-primary">CO-OP MODE AVAILABLE</p>
            <p className="mt-2 text-2xl font-black tracking-[-0.05em]">Have a hard problem? Let’s talk.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="game-link bg-card" href="mailto:ofirmgr@gmail.com"><Mail className="size-4" /> Email Ofir</a>
            <a className="game-link bg-card" href="https://github.com/ofirmgr" rel="noreferrer" target="_blank"><GitBranch className="size-4" /> View GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between font-semibold"><span>{label}</span><span className="font-mono text-xs text-primary">{value}</span></div>
      <div className="h-1.5 bg-muted" aria-label={`${label}: ${value} out of 100`}><div className="h-full bg-primary" style={{ width: `${value}%` }} /></div>
    </div>
  );
}

function SectionHeading({ kicker, title, icon, dark = false }: { kicker: string; title: string; icon: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex max-w-3xl items-start gap-4">
      <span className={`grid size-11 shrink-0 place-items-center border-2 ${dark ? 'border-white/30 text-[#7ef2c5]' : 'border-border text-primary'}`}>{icon}</span>
      <div><p className={`pixel-label ${dark ? 'text-[#7ef2c5]' : 'text-primary'}`}>{kicker}</p><h2 className="mt-2 text-3xl font-black leading-none tracking-[-0.055em] sm:text-4xl">{title}</h2></div>
    </div>
  );
}
