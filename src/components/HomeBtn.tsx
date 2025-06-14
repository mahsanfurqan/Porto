"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeBtn = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-4 left-4 z-50"
    >
      <Link
        href="/"
        className="text-foreground rounded-full flex items-center justify-center custom-bg w-fit self-start"
        aria-label="home"
      >
        <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
          <Home className="w-full h-auto" strokeWidth={1.5} />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Home
          </span>
        </span>
      </Link>
    </motion.div>
  );
};

export default HomeBtn;
