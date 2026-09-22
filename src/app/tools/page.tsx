import React from "react";
import { EmptyTabPage } from "@/components/EmptyTabPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools | 4iMC Project",
  description:
    "Napari plugins, QuPath batch classification scripts, and PyTransKit tools.",
};

export default function ToolsPage() {
  return (
    <EmptyTabPage
      title="Tools & Software"
      badge="Software Tools"
      subtitle="Napari plugins, QuPath batch classification scripts, and PyTransKit tools."
    />
  );
}
