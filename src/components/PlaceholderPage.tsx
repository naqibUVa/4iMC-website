import React from "react";
import NextLink from "next/link";
import { PROJECT_INFO } from "@/lib/constants";
import { ArrowLeft, Clock, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

interface PlaceholderPageProps {
  title: string;
  badge: string;
  description: string;
  expectedContent: {
    title: string;
    details: string;
    icon: string;
  }[];
}

export function PlaceholderPage({
  title,
  badge,
  description,
  expectedContent,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      {/* Hero Section */}
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Main Content Card: Content Coming Soon */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Notice Banner */}
        <div className="theme-card rounded-2xl p-8 sm:p-10 mb-10 border-dashed border-2 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[var(--badge-bg)] text-[var(--badge-text)] flex items-center justify-center shrink-0 border border-[var(--badge-border)] shadow-sm">
              <Clock className="w-7 h-7" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Content Coming Soon
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)]">
                  In Active Preparation
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                This section of the {PROJECT_INFO.shortTitle} portal is currently undergoing final review
                alongside our forthcoming manuscript. Code repositories, datasets, and step-by-step
                walkthroughs are being finalized for open release.
              </p>
            </div>
            <div className="shrink-0 pt-2 sm:pt-0">
              <a
                href={PROJECT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[var(--accent-primary)] text-white hover:opacity-95 shadow-md transition-all hover:scale-[1.02]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Track on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Anticipated Modules Preview */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-5">
            Anticipated Deliverables & Resources
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {expectedContent.map((item, idx) => (
              <div
                key={idx}
                className="theme-card rounded-xl p-5 hover:shadow-lg transition-all duration-200"
              >
                <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
