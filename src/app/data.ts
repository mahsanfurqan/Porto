/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #5BBFFE
}

*/

export interface IProjectsData {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
  image: string;
  highlights: string[];
}

export const projectsData: IProjectsData[] = [
    {
    id: 1,
    name: "OmniSource",
    description: "OmniSource is a digital operational management application designed to help companies manage daily activities, patrols, attendance, and reports in an integrated and real-time manner. This application makes it easier for users — especially operational or security teams — to record, monitor, and report activities more efficiently and transparently.. The integration of machine learning technology within the Mobile Balance Box application allows users to upload images of food to be automatically analyzed in order to obtain nutritional value information",
    date: "2025-7-1",
    demoLink: "https://github.com/developergamatecha/omnisource-me",
    image: "/projects/omnisource.jpg",
    highlights: ["NestJS", "Flutter", "UI/UX Design",],
  },
  {
    id: 2,
    name: "Balance Box",
    description: "BalanceBox is a premium catering service focused on providing healthy food. The integration of machine learning technology within the Mobile Balance Box application allows users to upload images of food to be automatically analyzed in order to obtain nutritional value information",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/Balance-Box",
    image: "/projects/balancebox.png",
    highlights: ["Firebase", "Flutter", "UI/UX Design",],
  },
    {
    id: 3,
    name: "PLP",
    description: "PLP (Pengenalan Lapangan Persekolahan) Application is a mobile application I developed using Flutter and GetX for state management. This application is designed to assist students in the PLP registration process and the recording of daily activities during the program implementation. Its main features include registration with options for interests and school locations, daily logbook completion complete with documentation and supporting links, and role-based navigation (student, observer, and admin). This application is connected to a Laravel backend via a token-protected API and uses GetStorage for local data storage. With a UI/UX design that aligns with the mockup, this application aims to support digitalization and efficiency in the implementation of PLP",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/PLP",
    image: "/projects/plp.png",
    highlights: ["Flutter", "Laravel", "UI/UX Design"],
  },
      {
    id: 4,
    name: "Telkomsel",
    description: "This is a mobile application created for a project. The Telkom Application is here to make it easier for you to manage all Telkom services in one hand. Starting from checking bills, making payments, purchasing internet packages",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/UI-Telkom",
    image: "/projects/telkom.png",
    highlights: ["Flutter", "Firebase", "UI/UX Design"],
  },
        {
    id: 5,
    name: "Sukanime",
    description: "This is a mobile application created for a project. Sukanime is an anime list application containing the top anime of all time and even currently ongoing anime, which includes descriptions of the anime and displays their trailers. This application uses the Jikan API",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/Anime",
    image: "/projects/sukanime.png",
    highlights: ["Flutter"],
  },
          {
    id: 6,
    name: "Sinstress",
    description: "This is a mobile application created for Psychology students. SIN Stress is a mental health application designed to help users manage stress and maintain their emotional well-being in a fun and interactive way",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/Sinstress",
    image: "/projects/sinstress.png",
    highlights: ["Java"],
  },
            {
    id: 7,
    name: "Mood Path",
    description: "This is a mobile application created for Psychology students. MoodPath is a mental health application designed to help users understand and monitor their daily mood and psychological well-being. It offers various intuitive and helpful features",
    date: "2023-04-15",
    demoLink: "https://github.com/mahsanfurqan/MoodPath",
    image: "/projects/moodpath.png",
    highlights: ["Java"],
  },
  {
    id: 8,
    name: "Catch Star Game",
    description: "Catch Star is an interactive web-based game built with Flutter and powered by the Flame game engine. This game challenges players to catch falling stars with smooth animations and responsive controls, demonstrating the capability of Flutter for creating engaging web gaming experiences",
    date: "2026-01-07",
    demoLink: "https://github.com/mahsanfurqan/catch-star-game",
    image: "/projects/catchstar.png",
    highlights: ["Flutter Web", "Flame Engine", "Game Development"],
  },
  // lainnya...
];

export interface IBtnList {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/mahsanfurqan",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mahsanfurqan",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/achhan__",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/cv.pdf",
    icon: "resume",
    newTab: true,
  },
];
