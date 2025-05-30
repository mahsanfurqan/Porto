import {
  Github,
  Home,
  Instagram,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IBtnList } from "@/app/data";

// Fungsi untuk menampilkan icon berdasarkan nama
const getIcon = (icon: string) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "instagram":
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

// Variants untuk animasi framer-motion
const itemVariants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

// Motion wrapper untuk Link agar bisa animasi
const MotionLink = motion(Link);

interface INavBtn extends IBtnList {
  x: number | string; // posisi horizontal (bisa pixel atau %)
  y: number | string; // posisi vertikal (bisa pixel atau %)
  labelDirection?: "left" | "right"; // arah label muncul
}

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab = false,
  labelDirection = "right",
}: INavBtn) => {
  return (
    <ResponsiveComponent>
      {({ size }: { size: number }) => {
        // Jika ukuran layar >= 480px maka posisi fixed dengan transform translate
        if (size && size >= 480) {
          return (
            <div
              className="w-fit absolute cursor-pointer z-50"
              style={{ transform: `translate(${x}, ${y})` }}
            >
                <MotionLink
                  href={link}
                  target={newTab ? "_blank" : "_self"}
                  aria-label={label}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  className="text-foreground rounded-full flex items-center justify-center custom-bg"
                >

                <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                  {getIcon(icon)}
                  {/* Peer element untuk hover */}
                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                  {/* Label muncul saat hover */}
                  <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                    {label}
                  </span>
                </span>
              </MotionLink>
            </div>
          );
        }

        // Ukuran layar kecil, tampilkan tombol tanpa posisi absolut
        return (
          <div className="cursor-pointer z-50">
                <MotionLink
                  href={link}
                  target={newTab ? "_blank" : "_self"}
                  aria-label={label}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  className="text-foreground rounded-full flex items-center justify-center custom-bg"
                >

              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left"
                      ? "right-full left-auto mx-2"
                      : "left-full mx-2"
                  )}
                >
                  {label}
                </span>
              </span>
            </MotionLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
