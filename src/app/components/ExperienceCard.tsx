import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface IExperienceCardProps {
  from?: string;
  to?: string;
  company?: string;
  href?: string;
  title?: string;
  description?: string;
  skills?: string[];
  hoveredSkill?: string | null;
  setHoveredSkill?: (skill: string | null) => void;
}

const ExperienceCard = ({ from, to, skills, company, title, description, href, hoveredSkill, setHoveredSkill }: IExperienceCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-5 gap-y-4 h-fit mb-4 lg:mb-8">
      {/* Date - Row 1 on small, Row 1 Col 1-3 on large */}
      <div className="lg:col-span-3 lg:row-start-1">
        <div className="font-semibold text-slate-500 uppercase text-sm mt-2">{`${from} – ${to}`}</div>
      </div>

      {/* Company/Title/Description - Row 2 on small, Row 1 Col 4-10 on large */}
      <div className="lg:col-span-7 lg:row-start-1 flex flex-col gap-1.5">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="group text-lg font-semibold">
              <span className="animate-underline leading-relaxed">
                {company} <ArrowTopRightOnSquareIcon className="inline ml-1 size-4.5 mb-1 group-hover:text-slate-300 text-slate-500 delay-200 transition-colors" />
              </span>
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-slate-200">{company}</h3>
        )}
        <p className="text-slate-200 font-semibold">{title}</p>
      </div>
      <div className="lg:col-span-3 lg:row-start-2">
        <div className="flex gap-1.5 flex-wrap lg:mt-0">
          {skills?.map((skill, index) => {
            const isDimmed = hoveredSkill && hoveredSkill !== skill;

            return (
              <span
                key={index}
                onMouseEnter={() => setHoveredSkill?.(skill)}
                onMouseLeave={() => setHoveredSkill?.(null)}
                className={`hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center whitespace-nowrap bg-pink-800/25 text-xs text-rose-300 font-medium px-2.5 py-1 rounded-full cursor-default ${
                  isDimmed ? "opacity-40" : "opacity-100"
                }`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
      <p className="text-sm lg:row-start-2 lg:col-span-7">{description}</p>
    </div>
  );
};

export default ExperienceCard;
