"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import {
  PROJECT_INFO,
  RESEARCH_HIGHLIGHTS,
  KEYWORDS,
  TECHNOLOGIES,
  STATISTICS,
} from "@/lib/constants";
import { withBasePath } from "@/lib/basePath";
import { ScientificHeroCanvas } from "@/components/ScientificHeroCanvas";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  ArrowRight,
  Code2,
  Database,
  ChevronDown,
  Layers,
  Network,
  Eye,
  Binary,
  Terminal,
  Cpu,
  BookOpen,
  ExternalLink,
  Sparkles,
  Microscope,
  Dna,
  FileText,
  BarChart3,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const [selectedHighlight, setSelectedHighlight] = useState<number | null>(null);

  const highlightIcons = [
    <Layers key="1" className="w-6 h-6 text-cyan-400" />,
    <Network key="2" className="w-6 h-6 text-purple-400" />,
    <Eye key="3" className="w-6 h-6 text-emerald-400" />,
    <Binary key="4" className="w-6 h-6 text-amber-400" />,
  ];

  const techIcons: Record<string, React.ReactNode> = {
    Python: <Terminal className="w-6 h-6 text-[#3776AB]" />,
    Napari: <Microscope className="w-6 h-6 text-[#80DEEA]" />,
    QuPath: <Eye className="w-6 h-6 text-[#EC407A]" />,
    Jupyter: <BookOpen className="w-6 h-6 text-[#F37626]" />,
    GitHub: <Code2 className="w-6 h-6 text-[var(--accent-primary)]" />,
    "HPC Computing": <Cpu className="w-6 h-6 text-[#00897B]" />,
  };

  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-color)]">
        {/* Dynamic Scientific Background Canvas */}
        <ScientificHeroCanvas />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Scientific Research Project Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold theme-badge shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
            </span>
            <span className="tracking-wide">
              {PROJECT_INFO.department} • {PROJECT_INFO.institution}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12] max-w-4xl mx-auto">
            Iterative Indirect Immunofluorescence Imaging{" "}
            <span className="text-gradient-chromosome">(4i)</span> of Mitotic Chromosomes
          </h1>

          {/* Project Description verbatim from prompt */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-normal">
            This project investigates how chromosome passenger complex (CPC) signaling and chromosome condensation are coordinated during mitosis using high-dimensional multiplex imaging. We develop optimal transport-based methods to quantify, visualize, and compare chromosome-scale variation across cell lines, enabling the study of how chromosome geometry influences protein localization and chromosomal organization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* Primary Button 1: View Code */}
            <NextLink
              href="/code"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[var(--accent-primary)] text-white hover:opacity-95 shadow-lg shadow-[var(--accent-glow)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Code2 className="w-4 h-4" />
              <span>View Code</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </NextLink>

            {/* Primary Button 2: Explore Data */}
            <NextLink
              href="/data"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-focus)] hover:bg-[var(--bg-surface-hover)] shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Database className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Explore Data</span>
            </NextLink>

            {/* Secondary Button: Learn More */}
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
            >
              <span>Learn More</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Metrics Bar below CTA */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[var(--text-muted)] font-mono border-t border-[var(--border-color)]/60 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>24+ Multiplex Channels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span>Optimal Transport Morphometry</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
              <span>Sub-Chromosomal CPC Mapping</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. RESEARCH HIGHLIGHTS SECTION
          ======================================================== */}
      <section id="highlights" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold theme-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Research Highlights
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Quantitative physical biology uniting iterative multiplex microscopy with rigorous transport geometry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESEARCH_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedHighlight(selectedHighlight === idx ? null : idx)}
              className="theme-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] group-hover:border-[var(--border-focus)] transition-colors">
                    {highlightIcons[idx]}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)]/70 pt-3">
                  {item.details}
                </p>
              </div>

              <div className="pt-5 mt-3 flex items-center text-xs font-semibold text-[var(--accent-primary)] group-hover:gap-2 gap-1.5 transition-all">
                <span>Explore Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. KEYWORDS SECTION
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[var(--border-color)] theme-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Ontology & Taxonomy
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1">
                Project Keywords & Disciplines
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
              Interdisciplinary convergence across physical sciences, computer vision, and chromosome biochemistry.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {KEYWORDS.map((keyword) => (
              <div
                key={keyword}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium theme-card hover:border-[var(--border-focus)] hover:scale-[1.03] transition-all duration-200 cursor-default flex items-center gap-2 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                <span>{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TECHNOLOGY SECTION
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold theme-badge">
            <Terminal className="w-3.5 h-3.5" />
            <span>Open Toolchain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Computational Stack & Tools
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Built on standard bioimage analysis frameworks and accelerated scientific Python libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="theme-card rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] flex items-center justify-center shadow-xs">
                    {techIcons[tech.name]}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--bg-surface-hover)]">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border-color)]/70 flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>Integrated Tool</span>
                <span className="text-[var(--accent-primary)] font-bold">✓ Ready</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. STATISTICS SECTION
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[var(--border-color)] theme-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
              Experimental Scale & Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Project Scale & Quantitative Reach
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
              Empowering large-scale morphometric comparison with high statistical confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATISTICS.map((stat, idx) => (
              <div
                key={stat.label}
                className="theme-card rounded-2xl p-6 sm:p-7 text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--accent-primary)] mb-2 flex items-center justify-center font-mono">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={1800 + idx * 250}
                  />
                </div>

                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {stat.description}
                </p>

                {/* Subtile ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
