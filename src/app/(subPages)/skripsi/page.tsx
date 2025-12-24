import React from "react";

export const metadata = {
  title: "Skripsi",
  description: "Skripsi Document",
};

export default function SkripsiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <div className="w-full flex-1 flex flex-col p-3 sm:p-4 md:p-6 max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
          Skripsi
        </h1>
        
        {/* PDF Viewer Container */}
        <div className="w-full h-[calc(100vh-140px)] sm:h-[calc(100vh-160px)] md:h-[calc(100vh-180px)] border border-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/skripsi.pdf#view=FitH"
            className="w-full h-full"
            title="Skripsi PDF"
          />
        </div>

        {/* Download button for mobile */}
        <div className="mt-3 sm:mt-4">
          <a
            href="/skripsi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent text-accent-foreground py-3 px-4 rounded-lg text-center font-medium hover:opacity-90 transition-opacity md:hidden"
          >
            Buka PDF di Tab Baru
          </a>
        </div>
      </div>
    </div>
  );
}
