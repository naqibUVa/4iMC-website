export interface NavItem {
  name: string;
  href: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", description: "Project overview & scientific highlights" },
  { name: "Code", href: "/code", description: "Open-source analysis algorithms & repositories" },
  { name: "Data", href: "/data", description: "Multiplex imaging datasets & chromosome benchmarks" },
  { name: "Tools", href: "/tools", description: "Napari plugins, QuPath scripts & pipelines" },
  { name: "People", href: "/people", description: "Research team, investigators & collaborators" },
  { name: "Tutorials", href: "/tutorials", description: "Step-by-step protocols & computational guides" },
];

export const PROJECT_INFO = {
  title: "Iterative Indirect Immunofluorescence Imaging (4i) of Mitotic Chromosomes",
  shortTitle: "4iMC",
  tagline: "High-Dimensional Spatial Biology & Optimal Transport for Chromosome Organization",
  description:
    "This project investigates how chromosome passenger complex (CPC) signaling and chromosome condensation are coordinated during mitosis using high-dimensional multiplex imaging. We develop optimal transport-based methods to quantify, visualize, and compare chromosome-scale variation across cell lines, enabling the study of how chromosome geometry influences protein localization and chromosomal organization.",
  department: "Department of Electrical and Computer Engineering",
  institution: "University of Virginia",
  institutionUrl: "https://www.virginia.edu",
  githubUrl: "https://github.com/naqibUVa/4iMC-website",
  contactEmail: "qpb3vt@virginia.edu",
};

export const RESEARCH_HIGHLIGHTS = [
  {
    id: "multiplex-imaging",
    title: "High-Dimensional Multiplex Imaging",
    description: "Analyze chromosome-scale protein localization using iterative indirect immunofluorescence imaging.",
    badge: "Imaging Technology",
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(6, 182, 212, 0.4)",
    details:
      "Iterative cycles of antibody labeling, high-resolution imaging, and gentle elution allow simultaneous probing of dozens of epigenetic markers, architectural proteins, and signaling kinases on individual mitotic chromosomes.",
  },
  {
    id: "optimal-transport",
    title: "Optimal Transport Analysis",
    description: "Develop transport-based geometric representations for chromosome comparison.",
    badge: "Mathematical Framework",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.4)",
    details:
      "Leveraging Wasserstein distance metrics and Linear Optimal Transport (LOT) embeddings to characterize morphological and molecular deformation fields across chromosomes under varying genetic and biochemical perturbations.",
  },
  {
    id: "quantitative-visualization",
    title: "Quantitative Visualization",
    description: "Create interpretable visualizations of chromosome organization and protein distributions.",
    badge: "Visualization Engine",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.4)",
    details:
      "Multi-channel intensity manifolds, radial density profiles, and longitudinal chromosome coordinate projections offer intuitive, reproducible exploration of sub-chromosomal microdomains.",
  },
  {
    id: "computational-biology",
    title: "Computational Biology",
    description: "Combine mathematical modeling, imaging, and machine learning for biological discovery.",
    badge: "Integrated Systems",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.4)",
    details:
      "End-to-end processing pipelines uniting automated chromosome segmentation, cycle-to-cycle registration, intensity normalization, and unsupervised clustering of structural phenotypes.",
  },
];

export const KEYWORDS = [
  "4i Imaging",
  "Multiplex Imaging",
  "Spatial Biology",
  "Chromosome Biology",
  "Chromosome Passenger Complex",
  "Optimal Transport",
  "Machine Learning",
  "Computational Biology",
  "Python",
  "Napari",
  "QuPath",
];

export const TECHNOLOGIES = [
  {
    name: "Python",
    category: "Core Scientific Stack",
    description: "SciPy, NumPy, PyTorch, and scikit-image powering the underlying optimal transport and point cloud modeling.",
    accent: "#3776AB",
  },
  {
    name: "Napari",
    category: "Multi-dimensional Viewer",
    description: "Interactive GPU-accelerated visualization of n-dimensional multiplexed chromosome stacks and feature layers.",
    accent: "#80DEEA",
  },
  {
    name: "QuPath",
    category: "Bioimage Analysis",
    description: "High-throughput pixel classification, batch processing, and hierarchical spatial annotations across whole coverslips.",
    accent: "#EC407A",
  },
  {
    name: "Jupyter",
    category: "Reproducible Notebooks",
    description: "Open computational workflows documenting chromosome alignment, signal extraction, and statistical validation.",
    accent: "#F37626",
  },
  {
    name: "GitHub",
    category: "Open Source Ecosystem",
    description: "Version-controlled algorithm repositories, automated tests, and reproducible analysis pipelines.",
    accent: "#6E5494",
  },
  {
    name: "HPC Computing",
    category: "Scalable Infrastructure",
    description: "SLURM-managed parallel job scheduling for million-pixel multi-cycle alignment and transport optimization.",
    accent: "#00897B",
  },
];

export const STATISTICS = [
  {
    label: "Imaging Channels",
    value: 10,
    suffix: "+",
    description: "Iteratively probed fluorophores per chromosome",
  },
  {
    label: "Cell Lines",
    value: 2,
    suffix: "",
    description: "Mitotic cell lines investigated",
  },
  {
    label: "Chromosomes Analyzed",
    value: 1500,
    suffix: "+",
    description: "High-resolution segmented instances",
  },
  {
    label: "Computational Pipelines",
    value: 2,
    suffix: "",
    description: "Validated registration and transport modules",
  },
];
