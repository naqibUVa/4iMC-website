import React from "react";
import { EmptyTabPage } from "@/components/EmptyTabPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data | 4iMC Project",
  description:
    "Curated multiplex imaging datasets, OME-TIFF stacks, and chromosome spreads.",
};

export default function DataPage() {
  return (
    <EmptyTabPage
      title="Imaging & Spatial Data"
      badge="Datasets"
      subtitle="Curated OME-TIFF stacks, segmented chromosome spreads, and transport distance matrices."
    />
  );
}
