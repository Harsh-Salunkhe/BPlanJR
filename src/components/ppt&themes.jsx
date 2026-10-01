"use client";

import React from "react";
import { Download } from "lucide-react";

const THEMES = [
  "Healthcare & Life Sciences", "Biotechnology", "Nanotechnology", "Green Technology",
  "Safety", "Finance Technology", "IT Services", "Enterprise Software", "Marketing",
  "Transportation & Storage", "Education", "Media & Entertainment", "Food & Beverages",
  "Design", "Computer Vision", "Artificial Intelligence", "Robotics", "Analytics",
  "Internet of Things", "Agriculture", "Renewable Energy", "Non-Renewable Energy",
  "Chemicals", "Pets & Animals", "Security Solutions", "Social Impact",
  "Professional & Commercial Services", "Sports", "Social Network",
  "Open Innovation", "Student Life in Institutions",
];

const SLIDES = [
  "Title slide – team name, theme, team leader and members",
  "Idea title – context, problem statement and target group",
  "Solution proposed – your product, key features and how it works",
  "Business, marketing & USP – business model, audience, competition",
  "Roadmap & future vision – expansion and sustainable growth",
  "Additional insights – scalability, impact and market potential",
];

const DownloadButton = ({ href, fileName, label }) => (
  <a
    href={href}
    download={fileName}
    style={{ color: "#000" }}
    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 ease-out inline-flex items-center gap-2 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40"
  >
    {label}
    <Download size={22} className="transition-transform duration-300 group-hover:translate-y-0.5" />
  </a>
);

const ResourcesSection = () => {
  return (
    <section
      id="resources"
      className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 py-24"
    >
      <div className="relative z-10 flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 bg-clip-text text-transparent animate-text-gradient">
            Resources
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-amber-400 mb-20">
          Pick a theme from the domains guide, then build your pitch in the official template.
        </p>

        {/* Themes guide */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 bg-clip-text text-transparent animate-text-gradient">
            Startup Domains Guide
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-400 mb-6">
          31 themes, each with a problem statement and example ideas to get you started.
          Theme 30, Open Innovation, lets you pick your own problem.
        </p>
        <p className="text-base sm:text-lg text-amber-400 mb-10">
          {THEMES.join(" • ")}
        </p>
        <div className="mb-24">
          <DownloadButton
            href="/downloads/SharkTankJr_Themes_Guide.pdf"
            fileName="SharkTankJr_Themes_Guide.pdf"
            label="Download Themes Guide"
          />
        </div>

        {/* PPT template */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 bg-clip-text text-transparent animate-text-gradient">
            Pitch Deck Template
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-amber-400 mb-6">
          The official template every team must use. Follow this slide order:
        </p>
        <ol className="text-base sm:text-lg text-amber-400 mb-6 space-y-2 list-decimal list-inside">
          {SLIDES.map((slide) => (
            <li key={slide}>{slide}</li>
          ))}
        </ol>
        <p className="text-base sm:text-lg text-amber-400 mb-10">
          Maximum 7 slides (excluding title and thank-you). Submit as a PDF named
          TeamName_SharkTankJr.pdf.
        </p>
        <DownloadButton
          href="/downloads/SharkTankJr_PPT_Template.pptx"
          fileName="SharkTankJr_PPT_Template.pptx"
          label="Download PPT Template"
        />
      </div>
    </section>
  );
};

export default ResourcesSection;