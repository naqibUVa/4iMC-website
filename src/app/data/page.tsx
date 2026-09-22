import React from "react";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Benchmark Datasets | 4iMC Project",
  description:
    "High-dimensional iterative immunofluorescence imaging datasets of mitotic chromosomes across diverse cell lines.",
};

export default function DataPage() {
  return (
    <PlaceholderPage
      title="Imaging & Spatial Omics Data"
      badge="Multiplex Datasets"
      description="Explore curated high-dimensional imaging datasets featuring 24+ iterative antibody rounds across cell lines, complete with curated segmentation masks and chromosome landmark annotations."
      expectedContent={[
        {
          title: "Curated OME-TIFF Stacks",
          details:
            "Full multi-cycle image pyramids with complete metadata, laser power logs, fluorophore specs, and flat-field corrections.",
          icon: "📊",
        },
        {
          title: "Segmented Chromosome Instances",
          details:
            "Over 15,000 individually cropped and normalized chromosome spreads with arm-length axes and centromere coordinate tags.",
          icon: "🎯",
        },
        {
          title: "Optimal Transport Embeddings",
          details:
            "Precomputed Wasserstein distances, low-dimensional manifold projections, and population variation matrices.",
          icon: "🌐",
        },
      ]}
    />
  );
}
