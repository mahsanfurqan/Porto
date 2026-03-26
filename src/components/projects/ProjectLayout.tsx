'use client'
import { IProjectsData } from "@/app/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion(Link);

const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  image,
  highlights,
}: IProjectsData) => {
  const images = Array.isArray(image) ? image : [image];

  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="w-full flex flex-col md:flex-row gap-4 rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className={`w-full md:w-[300px] rounded-md overflow-hidden shrink-0 ${
          images.length > 1 ? "flex flex-col gap-2" : "h-[180px] relative"
        }`}
      >
        {images.map((img, idx) => (
          <div
            key={`${name}-img-${idx}`}
            className={`relative w-full rounded-md overflow-hidden ${
              images.length > 1 ? "h-[180px]" : "h-full"
            }`}
          >
            <Image
              src={img}
              alt={`${name} preview ${idx + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>


      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{name}</h2>
          <p className="text-muted mt-1">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {highlights.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-accent/20 text-accent border border-accent/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs text-muted mt-3">
          {new Date(date).toDateString()}
        </p>
      </div>
    </NavLink>
  );
};

export default ProjectLayout;
