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
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="w-full flex flex-col md:flex-row gap-4 rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full md:w-[300px] h-[180px] rounded-md overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
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
