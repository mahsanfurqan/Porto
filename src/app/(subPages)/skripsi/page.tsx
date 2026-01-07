"use client";

import React from "react";

export default function SkripsiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <div className="w-full flex-1 flex flex-col p-3 sm:p-4 md:p-6 max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
          Skripsi
        </h1>
        
        {/* PDF Viewer Container - Desktop */}
        <div className="hidden md:block w-full h-[calc(100vh-180px)] border border-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/skripsi.pdf#view=FitH"
            className="w-full h-full"
            title="Skripsi PDF"
          />
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full flex-1 flex flex-col items-center justify-center space-y-4 p-4 border border-border rounded-lg">
          <div className="text-center space-y-2">
            <svg 
              className="w-16 h-16 mx-auto text-foreground/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
              />
            </svg>
            <h2 className="text-lg font-semibold text-foreground">
              Skripsi PDF
            </h2>
            <p className="text-sm text-foreground/70">
              Untuk pengalaman terbaik di mobile, buka PDF di tab baru
            </p>
          </div>

          <a
            href="/skripsi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-accent text-accent-foreground py-4 px-6 rounded-lg text-center font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            Buka PDF
          </a>

          <a
            href="/skripsi.pdf"
            download="Skripsi_M_Ahsan_Furqan.pdf"
            className="w-full bg-foreground/10 text-foreground py-4 px-6 rounded-lg text-center font-medium hover:bg-foreground/20 transition-colors border border-border"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
