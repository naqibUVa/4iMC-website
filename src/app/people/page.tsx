import React from "react";
import { EmptyTabPage } from "@/components/EmptyTabPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People | 4iMC Project",
  description:
    "Investigators, graduate researchers, and cross-institutional collaborators.",
};

export default function PeoplePage() {
  return (
    <EmptyTabPage
      title="People & Collaborators"
      badge="Research Team"
      subtitle="Investigators, graduate researchers, and cross-institutional collaborators."
    />
  );
}
