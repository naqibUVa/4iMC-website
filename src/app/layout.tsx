import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PROJECT_INFO } from "@/lib/constants";
import { withBasePath } from "@/lib/basePath";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naqibUVa.github.io/4iMC-website"),
  title: {
    default: `${PROJECT_INFO.shortTitle} | ${PROJECT_INFO.title}`,
    template: `%s | ${PROJECT_INFO.shortTitle}`,
  },
  description: PROJECT_INFO.description,
  keywords: [
    "4i Imaging",
    "Multiplex Imaging",
    "Spatial Biology",
    "Mitotic Chromosomes",
    "Chromosome Passenger Complex",
    "Optimal Transport",
    "Computational Biology",
    "University of Virginia",
    "Napari",
    "QuPath",
  ],
  authors: [{ name: "Naqib Sad Pathan" }, { name: "University of Virginia" }],
  creator: "4iMC Research Team",
  publisher: "University of Virginia",
  icons: {
    icon: withBasePath("/4iMC.png"),
    shortcut: withBasePath("/4iMC.png"),
    apple: withBasePath("/4iMC.png"),
  },
  openGraph: {
    title: `${PROJECT_INFO.shortTitle} | ${PROJECT_INFO.title}`,
    description: PROJECT_INFO.description,
    url: "https://naqibUVa.github.io/4iMC-website/",
    siteName: PROJECT_INFO.shortTitle,
    images: [
      {
        url: withBasePath("/4iMC.png"),
        width: 1200,
        height: 1200,
        alt: "4iMC Logo and Mitotic Chromosome Multiplex Imaging",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROJECT_INFO.shortTitle} | ${PROJECT_INFO.title}`,
    description: PROJECT_INFO.description,
    images: [withBasePath("/4iMC.png")],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark-scientific"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash inline script to restore theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('4imc_theme');
                  if (saved && ['light-academic', 'dark-scientific', 'multiplex-imaging'].indexOf(saved) !== -1) {
                    document.documentElement.setAttribute('data-theme', saved);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-[var(--accent-primary)] selection:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
