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
            Web & Mobile App Developer & Designer UI/UX | Mahasiswa FILKOM 2022
          </p>
          <p className="font-light text-base leading-relaxed">
            I am a student with a strong passion for mobile application development and UI/UX design. With a background in information technology, I am committed to combining education and technology to create innovative digital solutions. My focus is on designing intuitive and engaging user experiences while continuously developing my skills to build functional applications that have a positive impact. Additionally, I have an interest in web development, encompassing both frontend and backend technologies
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
