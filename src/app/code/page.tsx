import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code & Software Repositories | 4iMC Project",
  description:
    "Open-source Python pipelines, optimal transport algorithms, and image processing modules for mitotic chromosome 4i imaging.",
};

export default function CodePage() {
  return (
    <PlaceholderPage
      title="Code & Computational Pipelines"
      badge="Open Source Algorithms"
      description="Access our open-source Python toolkits, linear optimal transport (LOT) solvers, and registration workflows designed specifically for iterative multiplex immunofluorescence microscopy."
      expectedContent={[
        {
          title: "LOT Chromosome Solver",
          details:
            "Linear Optimal Transport embedding scripts computing continuous displacement fields between reference and perturbation karyotypes.",
          icon: "🧬",
        },
        {
          title: "Multiplex Image Registration",
          details:
            "Cycle-to-cycle sub-pixel elastic alignment algorithms preserving delicate chromosome arm morphologies and CPC localization.",
          icon: "🔬",
        },
        {
          title: "Benchmarking Test Suite",
          details:
            "Automated validation pipelines with synthetic chromosome phantoms and quantitative morphometry evaluation metrics.",
          icon: "⚡",
        },
      ]}
    />
  );
}
