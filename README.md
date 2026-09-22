# Iterative Indirect Immunofluorescence Imaging (4i) of Mitotic Chromosomes (4iMC)

[![Deploy to GitHub Pages](https://github.com/naqibUVa/4iMC-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/naqibUVa/4iMC-website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%204-38bdf8)](https://tailwindcss.com/)

An academic research project website showcasing high-dimensional spatial biology, optimal transport modeling, and chromosome morphometry. Built for the **Iterative Indirect Immunofluorescence Imaging (4i) of Mitotic Chromosomes (4iMC)** project at the **University of Virginia**.

---

### 🌐 Quick Links & Access

- 🚀 **Official Live Website**: [https://naqibUVa.github.io/4iMC-website/](https://naqibUVa.github.io/4iMC-website/)
- 📦 **GitHub Repository**: [https://github.com/naqibUVa/4iMC-website](https://github.com/naqibUVa/4iMC-website)
- 💻 **Local Dev Server**: [http://localhost:3000](http://localhost:3000) (when running `npm run dev`)

---

## 🔬 Project Overview

This project investigates how chromosome passenger complex (CPC) signaling and chromosome condensation are coordinated during mitosis using high-dimensional multiplex imaging. We develop optimal transport-based methods to quantify, visualize, and compare chromosome-scale variation across cell lines, enabling the study of how chromosome geometry influences protein localization and chromosomal organization.

### Key Capabilities
- **Iterative 4i Imaging**: High-dimensional multi-round immunofluorescence preserving delicate mitotic chromosome morphology.
- **Optimal Transport Analysis**: Wasserstein distance metric spaces and Linear Optimal Transport (LOT) embeddings to compare chromosomal geometry and protein density distributions.
- **Quantitative Bioimage Integration**: Seamless interoperability with Napari, QuPath, and scientific Python (PyTorch, SciPy, scikit-image).

---

## 🎨 Three-State Scientific Theme System

The website features an interactive theme switcher persisted in `localStorage`:

1. **🏛️ Light Academic**
   - Clean white canvas, Duke-like blue (`#003366`) accents, and publication-ready typography.
2. **🔭 Dark Scientific**
   - Deep navy observatory palette (`#090D16`), high-contrast electric cyan, and clean data-visualization accents.
3. **🔬 Multiplex Imaging Theme**
   - Inspired directly by fluorescence microscopy and the project logo. Deep obsidian fluorophore background (`#06070D`) with multi-spectral cyan (FITC/Alexa 488), magenta (Rhodamine/Alexa 568), yellow (CPC centroid), and purple (Cy5) accents.

---

## 🧭 Site Architecture & Navigation

- **Home (`/`)**: Hero section with interactive chromosome canvas, research highlights, keywords ontology, technology toolchain, and animated metrics.
- **Code (`/code`)**: Repositories, LOT solvers, registration workflows, and test suites.
- **Data (`/data`)**: Curated OME-TIFF stacks, segmented chromosome spreads, and transport distance matrices.
- **Tools (`/tools`)**: Napari plugins, QuPath batch classification scripts, and PyTransKit tools.
- **People (`/people`)**: Investigators, graduate researchers, and cross-institutional collaborators.
- **Tutorials (`/tutorials`)**: Wet-lab staining protocols, interactive Jupyter notebooks, and video demonstrations.

---

## 🚀 Local Development

### Prerequisites
- Node.js (v20+ recommended)
- npm (v10+ recommended)

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/naqibUVa/4iMC-website.git
cd 4iMC-website

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Static Production Build

The website is configured for pure static export:

```bash
# Build locally without basePath
npm run build

# Preview static output locally
npx serve out
```

To build for GitHub Pages with subpath prefixing:
```bash
NEXT_PUBLIC_BASE_PATH="/4iMC-website" npm run build
```

The resulting static assets and HTML files will be written to the `out/` directory.

---

## 🌐 GitHub Pages Automatic Deployment

This repository includes an automated GitHub Actions deployment workflow located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Setting Up GitHub Pages in Your Repository:
1. Navigate to your repository on GitHub: `https://github.com/naqibUVa/4iMC-website`
2. Go to **Settings** > **Pages** (under "Code and automation").
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to the `main` branch:
   ```bash
   git push origin main
   ```
5. GitHub Actions will automatically run the build job and deploy the static site to:
   **`https://naqibUVa.github.io/4iMC-website/`**

---

## 🏛️ Affiliation & Contact

- **Institution**: Department of Electrical and Computer Engineering, University of Virginia
- **Contact**: `qpb3vt@virginia.edu`
- **GitHub**: [@naqibUVa](https://github.com/naqibUVa)
