import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Software Plugins | 4iMC Project",
  description:
    "Interactive Napari plugins, QuPath scripts, and CLI utilities for multi-cycle immunofluorescence chromosome analysis.",
};

export default function ToolsPage() {
  return (
    <PlaceholderPage
      title="Interactive Software Tools"
      badge="Bioimage Ecosystem"
      description="Custom extensions and interactive interfaces built for biologists and bioinformaticians, bringing optimal transport modeling directly into standard bioimage viewers."
      expectedContent={[
        {
          title: "Napari-4iMC Plugin",
          details:
            "GPU-accelerated Napari plugin enabling multi-channel overlay, custom false-color cycling, and interactive chromosome alignment inspection.",
          icon: "🖥️",
        },
        {
          title: "QuPath Legend & Batch Classifier",
          details:
            "Automated Groovy scripts for whole-slide chromosome spread detection, cell stage gating, and multiplex signal export.",
          icon: "🧪",
        },
        {
          title: "PyTransKit Integration",
          details:
            "Seamless compatibility with transport-based morphometry tools for linear and non-linear metric space transformations.",
          icon: "📦",
        },
      ]}
    />
  );
}
