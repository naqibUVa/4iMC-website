import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials & Protocols | 4iMC Project",
  description:
    "Computational notebooks, wet-lab protocols, and video tutorials for iterative indirect immunofluorescence imaging of mitotic chromosomes.",
};

export default function TutorialsPage() {
  return (
    <PlaceholderPage
      title="Tutorials & Protocols"
      badge="Educational Materials"
      description="Step-by-step wet-lab preparation guides, computational analysis notebooks, and recorded walkthroughs to reproduce 4i imaging and transport-based chromosome analysis."
      expectedContent={[
        {
          title: "4i Wet-Lab Staining Protocol",
          details:
            "Detailed preparation steps for chromosome spreading, antibody incubation rounds, gentle fluorophore stripping, and preservation.",
          icon: "🧪",
        },
        {
          title: "Jupyter Walkthrough Notebooks",
          details:
            "Self-contained interactive Google Colab / Jupyter notebooks covering image registration, spot detection, and Wasserstein analysis.",
          icon: "📓",
        },
        {
          title: "Video Guides & Demonstrations",
          details:
            "Recorded software walkthroughs demonstrating Napari plugin navigation, whole-slide annotation in QuPath, and SLURM pipeline execution.",
          icon: "🎥",
        },
      ]}
    />
  );
}
