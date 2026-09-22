"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, Theme } from "./ThemeProvider";
import { Sparkles, Palette, ChevronDown, Check } from "lucide-react";

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentThemeObj = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label="Select theme"
        aria-expanded={isOpen}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 text-xs md:text-sm font-medium ${
          isOpen
            ? "border-[var(--border-focus)] ring-2 ring-[var(--accent-glow)]"
            : "border-[var(--border-color)] hover:border-[var(--border-focus)]"
        } bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm`}
      >
        <span className="text-base" role="img" aria-hidden="true">
          {currentThemeObj.icon}
        </span>
        <span className={compact ? "hidden sm:inline" : "inline"}>
          {currentThemeObj.label}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 text-[var(--text-muted)] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2 py-1.5 mb-1 border-b border-[var(--border-color)] flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <Palette className="w-3 h-3 text-[var(--accent-primary)]" />
              Display Theme
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] font-mono">
              3 Modes
            </span>
          </div>

          <div className="space-y-1">
            {themes.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? "bg-[var(--bg-surface-hover)] border border-[var(--border-focus)] text-[var(--text-primary)] font-semibold shadow-sm"
                      : "hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-transparent"
                  }`}
                >
                  <span className="text-base mt-0.5 shrink-0" role="img" aria-hidden="true">
                    {t.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="truncate">{t.label}</span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 ml-1" />
                      )}
                    </div>
                    <p className="text-[10px] text-[var(--text-muted)] mt-0.5 leading-snug line-clamp-2">
                      {t.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
