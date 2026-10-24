import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "100% Fully Funded AI & Machine Learning Postgraduate Roadmap",
  description: "The canonical zero-to-landing blueprint for Computer Science, AI, and Machine Learning stude nts securing 100% fully funded PhD and Master's research assistantships abroad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-300 font-sans relative">
        <AmbientBackground />
        <Navbar />
        <div className="flex-1 relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

