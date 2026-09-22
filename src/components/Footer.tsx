import React from "react";
import NextLink from "next/link";
import { PROJECT_INFO, NAV_ITEMS } from "@/lib/constants";
import { withBasePath } from "@/lib/basePath";
import { Mail, School, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  return (
    <footer className="theme-footer transition-colors duration-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Project Identity & Abstract */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-color)] bg-black/40 p-0.5">
                <img
                  src={withBasePath("/4iMC.png")}
                  alt="4iMC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {PROJECT_INFO.shortTitle} Project
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {PROJECT_INFO.title}
                </p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Investigating the coordination of chromosome passenger complex (CPC) signaling
              and mitotic chromosome condensation using high-dimensional multiplex imaging and
              optimal transport mathematics.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                <School className="w-3.5 h-3.5" />
                {PROJECT_INFO.department} • {PROJECT_INFO.institution}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Links & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Links & Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={PROJECT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--text-muted)]" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href={PROJECT_INFO.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-2"
                >
                  <School className="w-4 h-4 text-[var(--text-muted)]" />
                  <span>University of Virginia</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROJECT_INFO.contactEmail}`}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                  <span>Contact: {PROJECT_INFO.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-10 mt-10 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {PROJECT_INFO.shortTitle} Project. All rights reserved.
          </p>
          <p className="flex items-center gap-3">
            <span>Hosted via GitHub Pages</span>
            <span>•</span>
            <span>Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
