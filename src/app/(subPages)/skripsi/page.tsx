import React from "react";

export const metadata = {
  title: "Skripsi",
  description: "Skripsi Document",
};

export default function SkripsiPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full h-full max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-foreground">Skripsi</h1>
        
        {/* PDF Viewer Container */}
        <div className="w-full h-[calc(100vh-8rem)] border border-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/skripsi.pdf"
            className="w-full h-full"
            title="Skripsi PDF"
          />
        </div>
      </div>
    </div>
  );
}
