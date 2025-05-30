"use client";
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-6 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-left w-full">
            M. Ahsan Furqan
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Web & Mobile App Developer | Mahasiswa FILKOM 2022
          </p>
          <p className="font-light text-base leading-relaxed">
            Saya adalah seorang mahasiswa Fakultas Ilmu Komputer angkatan 2022 yang memiliki ketertarikan tinggi terhadap pengembangan aplikasi berbasis web dan mobile. Saat ini saya aktif mengembangkan aplikasi Flutter menggunakan GetX state management, serta memiliki ketertarikan khusus pada UI/UX dan solusi digital untuk daerah terpencil. Saya juga memiliki pengalaman menggunakan Laravel di sisi backend dan antusias mengembangkan produk yang bermanfaat.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full lg:col-span-4 !p-0 flex items-center justify-center">
          <img
            className="w-48 h-48 rounded-full object-cover"
            src="/profile.jpg" // Ganti dengan path foto kamu
            alt="M. Ahsan Furqan"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
