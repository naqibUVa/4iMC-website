import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People & Collaborators | 4iMC Project",
  description:
    "Investigators, computational biologists, and microscopy researchers advancing chromosome structural biology at the University of Virginia.",
};

export default function PeoplePage() {
  return (
    <PlaceholderPage
      title="Research Team & Collaborators"
      badge="Interdisciplinary Group"
      description="The 4iMC project brings together computational biologists, mathematicians, and microscopy specialists dedicated to uncovering the physical principles of genome architecture."
      expectedContent={[
        {
          title: "Principal Investigators",
          details:
            "Faculty leadership guiding mathematical foundation, optimal transport formulations, and experimental biology protocols.",
          icon: "🎓",
        },
        {
          title: "Graduate Researchers & Postdocs",
          details:
            "Core team implementing machine learning models, biological assays, QuPath scripts, and data curation.",
          icon: "🔬",
        },
        {
          title: "Academic & Clinical Partners",
          details:
            "Cross-institutional collaborators providing comparative cancer cell lines, imaging infrastructure, and biological validation.",
          icon: "🤝",
        },
      ]}
    />
  );
}
