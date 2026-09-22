"use client";

import React, { useState } from "react";
import Link from "next/navigation";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/basePath";
import { NAV_ITEMS, PROJECT_INFO } from "@/lib/constants";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu, X, ExternalLink, Dna } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full theme-navbar transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand & Logo (Top-Left Prominent) */}
          <NextLink
            href="/"
            className="flex items-center gap-3.5 group transition-transform duration-200 hover:scale-[1.01]"
            aria-label={`${PROJECT_INFO.shortTitle} Home`}
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[var(--border-color)] bg-black/40 flex items-center justify-center shadow-md group-hover:border-[var(--border-focus)] transition-colors">
              <img
                src={withBasePath("/4iMC.png")}
                alt="4iMC Logo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-base sm:text-lg text-[var(--text-primary)] font-mono">
                  4iMC
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                  Research
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium line-clamp-1 max-w-[200px] sm:max-w-xs">
                Mitotic Chromosome Spatial Biology
              </span>
            </div>
          </NextLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[var(--bg-surface-hover)] text-[var(--accent-primary)] font-semibold border border-[var(--border-focus)] shadow-xs"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
                  }`}
                >
                  {item.name}
                </NextLink>
              );
            })}
          </nav>

          {/* Right Controls: Theme Switcher & GitHub CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeSwitcher />

            <a
              href={PROJECT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-focus)] text-[var(--text-primary)] transition-all shadow-xs"
              title="GitHub Repository"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[var(--text-primary)]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--bg-surface-hover)] text-[var(--accent-primary)] font-semibold border border-[var(--border-focus)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      {item.description}
                    </span>
                  </div>
                </NextLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">
              {PROJECT_INFO.institution}
            </span>
            <a
              href={PROJECT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-primary)] hover:underline"
            >
              Repository
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
