import React from "react";
import { EmptyTabPage } from "@/components/EmptyTabPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code | 4iMC Project",
  description:
    "Open-source code, optimal transport solvers, and analysis pipelines for 4i mitotic chromosomes.",
};

export default function CodePage() {
  return (
    <EmptyTabPage
      title="Code & Repositories"
      badge="Open Source"
      subtitle="Repositories, LOT solvers, registration workflows, and test suites."
    />
  );
}
