import React from "react";
import NextLink from "next/link";
import { ArrowLeft, Clock, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { PROJECT_INFO } from "@/lib/constants";

interface EmptyTabPageProps {
  title: string;
  badge: string;
  subtitle?: string;
}

export function EmptyTabPage({
  title,
  badge,
  subtitle,
}: EmptyTabPageProps) {
  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      {/* Page Header */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-[var(--border-color)]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <NextLink
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </NextLink>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold theme-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Main Empty Content Body */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full flex items-center justify-center">
        <div className="w-full theme-card rounded-2xl p-10 sm:p-14 border-dashed border-2 text-center max-w-2xl mx-auto space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[var(--bg-surface-hover)] border border-[var(--border-color)] text-[var(--accent-primary)] flex items-center justify-center mx-auto shadow-xs">
            <Clock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span>Under Active Development</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Content Coming Soon
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
              This page is prepared and will be populated as research findings, datasets, and pipelines are released.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <NextLink
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </NextLink>

            <a
              href={PROJECT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent-primary)] text-white hover:opacity-95 shadow-xs transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
