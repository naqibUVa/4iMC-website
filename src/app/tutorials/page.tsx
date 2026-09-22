import React from "react";
import { EmptyTabPage } from "@/components/EmptyTabPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials | 4iMC Project",
  description:
    "Wet-lab staining protocols, interactive Jupyter notebooks, and video demonstrations.",
};

export default function TutorialsPage() {
  return (
    <EmptyTabPage
      title="Tutorials & Protocols"
      badge="Protocols & Guides"
      subtitle="Wet-lab staining protocols, interactive Jupyter notebooks, and video demonstrations."
    />
  );
}
