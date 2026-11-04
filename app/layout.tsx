import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILM Labs | Project-Based Learning & STEM Education",
  description:
    "Explore ILM Labs – a learning platform focused on project-based learning, STEM education, hands-on experiments, coding, robotics, and practical skills for students.",
  keywords: [
    "ILM Labs",
    "Project-Based Learning",
    "STEM Education",
    "Coding for Kids",
    "Robotics for Students",
    "Practical Learning",
    "Online Workshops",
    "Student Skill Development",
  ],
  applicationName: "ILM Labs",
  openGraph: {
    title: "ILM Labs | Learn by Building, Discover by Doing",
    description:
      "Empowering students through hands-on projects, STEM education, experiments, and practical learning experiences.",
    siteName: "ILM Labs",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
