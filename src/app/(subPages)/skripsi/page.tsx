import React from "react";

export const metadata = {
  title: "Skripsi",
  description: "Skripsi Document",
};

export default function SkripsiPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-background">
      <div className="w-full h-full flex flex-col p-2 sm:p-4 md:p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-foreground px-2">
          Skripsi
        </h1>
        
        {/* PDF Viewer Container */}
        <div className="w-full flex-1 border border-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/skripsi.pdf"
            className="w-full h-full"
            title="Skripsi PDF"
          />
        </div>

        {/* Download button for mobile */}
        <div className="mt-2 sm:mt-4 md:hidden">
          <a
            href="/skripsi.pdf"
            download
            className="block w-full bg-accent text-accent-foreground py-3 px-4 rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
