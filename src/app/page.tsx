"use client";
import { useState } from "react";
import LinkedIn from "./components/icons/LinkedIn";
import Background from "./components/Background";
import Github from "./components/icons/Github";
import ExperienceCard from "@components/ExperienceCard";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ProjectCard from "@components/ProjectCard";
import Link from "next/link";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const workExperience = [
    {
      from: "2023",
      to: "present",
      skills: ["Vue.js", "Laravel", "Shopify", "TypeScript", "JavaScript", "PHP", "Liquid", "MySQL", "Node"],
      company: "The Gifting Company",
      title: "Lead Front End Software Engineer",
      href: "https://www.thegiftingcompany.com",
      description:
        "Developed and maintained core features for internal tools supporting order management, reporting, and data aggregation across multiple e-commerce brands. Refactored and standardized our in-house Vue component library to improve maintainability and reusability. Migrated one of our top brands to Shopify by building custom Shopify apps and Liquid snippets, directly contributing to $3.5M in sales.",
    },
    {
      from: "2022",
      to: "2023",
      skills: ["React", "React Native", "Express", "MongoDB", "TypeScript", "JavaScript", "Node"],
      company: "2Leaf Web Development / SAM Technologies",
      href: "https://www.mysamcloud.com/",
      title: "Lead Full Stack Engineer",
      description:
        "As a founding engineer, led a small team in building core features for an online tax prep platform including real-time WebSocket chat, dynamic pricing, and admin dashboards. Designed and developed features for web and mobile applications, successfully shipping 6+ projects within a single quarter. Built a location-based mobile app for vegans using Google Maps and Places APIs.",
    },
    {
      from: "2021",
      to: "2022",
      skills: ["Community Management", "Content Moderation", "Digital Engagement"],
      company: "Sony @ ModSquad",
      title: "Tier 2 Digital Engagement Specialist",
      description:
        "Built, moderated, and managed digital client communities within Sony's PlayStation in-game chat. Managed the content and flow of online chat rooms, reviews, and contents for multiple clients such as Sony and Yelp. Collaborated with peers to create new content moderation guidelines that better adhere to client policies.",
    },
  ];

  const projects = [
    {
      title: "Thockey.io",
      description:
        "A type-testing web app that allows users to test their typing speed and accuracy with various text samples. It features a clean interface, real-time feedback, and a leaderboard to compare scores with friends.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Next.js"],
      image: "/projects/thockey.png",
      href: "https://thockey.io",
    },
    {
      title: "FlexLog",
      description: "A personal workout tracker I used to use track my workouts, progress, and personal records. Currently retired.",
      skills: ["React Native", "Javascript", "Expo", "SQLite"],
      image: "/projects/flex-log.png",
      href: "https://github.com/juuuuurien/FlexLog",
    },
  ];
  return (
    <>
      <Background></Background>
      <div className="relative max-w-screen-xl grid grid-cols-1 lg:grid-cols-[45%_55%] min-h-screen p-4 lg:px-8 gap-8 sm:py-0 sm:px-20 sm:mx-auto font-[family-name:var(--font-geist-sans)]">
        <header className="py-4 lg:py-20 flex flex-col gap-[32px] lg:row-start-1 sm:items-start lg:sticky lg:top-0 lg:max-h-screen">
          <div>
            <div className="flex align-bottom mb-2">
              <p>{`Hi, I'm`}</p>
            </div>
            <h1 className="text-6xl mb-2">Julien Lopez</h1>
            <h2 className="text-2xl mb-3">Fullstack | Front End Engineer,</h2>
            <p className="group">
              and I{" "}
              <span className="relative inline-block before:transition-all before:delay-200 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-rose-500 before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-rose-400 group-hover:text-shadow-rose-600/65 transition-all duration-200 ease-[cubic-bezier(0.68,-1,0.32,1.6)] group-hover:-translate-y-0.5 inline-block">
                  love
                </span>
              </span>{" "}
              creating things, especially for the web.
            </p>
            <ul className="flex mt-[32px]">
              <Github
                className="cursor-pointer"
                href="https://www.github.com/juuuuurien"
              />
              <LinkedIn
                className="cursor-pointer"
                href="https://www.linkedin.com/in/julien-lopez-dev"
              />
            </ul>
          </div>
        </header>
        <section className="lg:py-20 h-fit flex flex-col gap-[32px] lg:row-start-1 items-center sm:items-start">
          <div className="group flex flex-col gap-[32px] mb-8">
            <p className="mt-[2rem]">
              I&apos;m a{" "}
              <span className="relative inline-block before:transition-all before:delay-100 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-slate-400 before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-slate-200 group-hover:text-shadow-slate-200/40 transition-all delay-100">Fullstack, Front End loving engineer</span>
              </span>{" "}
              with a passion for building user interfaces. I have an eye for detail and love creating features that perform as well as they look. Knowing I contribute to features
              users use daily is so awesome to me.
            </p>
            <p>
              Currently I&apos;m working at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-200 animate-underline transition-all delay-125"
                href="https://www.thegiftingcompany.com"
              >
                The Gifting Company
              </a>{" "}
              as a Front End Engineer, where I contribute to a monolithic{" "}
              <span className="relative inline-block before:transition-all before:delay-150 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-red-600 before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-red-400 group-hover:text-shadow-red-400/65 transition-all delay-150">Laravel</span>
              </span>{" "}
              app. I create, maintain, and polish user interfaces of our internal dashboards, our in-house{" "}
              <span className="relative inline-block before:transition-all before:delay-250 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-emerald-500 before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-emerald-400 group-hover:text-shadow-emerald-600/65 transition-all delay-250">Vue.js</span>
              </span>{" "}
              component library, and our custom{" "}
              <span className="relative inline-block before:transition-all before:delay-300 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-[#4a942d] before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-[#8dee67] group-hover:text-shadow-[#69a352]/65 transition-all delay-300">Shopify</span>
              </span>{" "}
              checkout experience, widgets, and more.
            </p>
            <p>
              My prior work consists of <span className="font-semibold text-slate-200">user facing</span> features for{" "}
              <span className="font-semibold text-slate-200">startups and private clients</span>, ranging from realtime chat applications to full-fledged full-stack{" "}
              <span className="relative inline-block before:transition-all before:delay-350 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-[#1f74ad] before:blur-lg before:opacity-0">
                <span className="relative group-hover:text-[#58c4dc] group-hover:text-shadow-[#58a7dc]/60 transition-all delay-350">React Native</span>
              </span>{" "}
              apps. I also have several personal pet projects, including a <span className="font-semibold text-slate-200">workout tracker</span> as well as several{" "}
              <span className="font-semibold text-slate-200">type-testing</span> web apps.
            </p>
            <p>
              Other than programming, I like to work out, paint (watercolor & guoache), and love gaming. My latest muse has been{" "}
              <span className="relative inline-block before:transition-all before:delay-400 group-hover:before:opacity-25 before:absolute before:-inset-1 before:block before:bg-[#a57447] before:blur-md before:opacity-0">
                <span className="relative group-hover:text-[#D4A574] group-hover:text-shadow-[#a57447]/65 transition-all delay-400">Magic the Gathering</span>
              </span>
              , EDH specifically!
            </p>
          </div>
          {/* 
            TODO: Maybe have an intersection observer. 
            When each experience / project card is in view, it will "highlight" the card,
            and show relevant images on the left column?
          */}
          <ul className="flex flex-col gap-4 sm:mb-8">
            {workExperience.map((experience, index) => (
              <li key={index}>
                <ExperienceCard
                  {...experience}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              </li>
            ))}
            <Link
              href="/resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="lg:self-end mb-8 animate-underline animate-underline-color-rose-400 hover:text-rose-400 transition-all cursor-pointer active:opacity-60 group w-fit"
            >
              View my full resume
              <ArrowDownTrayIcon className="inline ml-1 size-4.5 mb-1 group-hover:text-rose-400 text-slate-500 delay-200 transition-colors" />
            </Link>
          </ul>
          <div className="flex flex-col gap-4 sm:mb-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                skills={project.skills}
                href={project.href}
                image={project.image}
              />
            ))}
          </div>
        </section>
        <footer className="lg:mb-4 lg:col-span-full flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-slate-500">© {`${new Date().getFullYear()}`} Julien Lopez</p>
            <p className="text-sm text-slate-500">Built with Next.js</p>
          </div>
        </footer>
      </div>
    </>
  );
}
