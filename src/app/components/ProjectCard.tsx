import Link from "next/link";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface ProjectCardProps {
  href?: string;
  title: string;
  description?: string;
  skills?: string[];
  image?: string;
}

const ProjectCard = ({ skills, title, description, href, image }: ProjectCardProps) => {
  const imageContent = (
    <div className="w-auto h-26  border-1 border-slate-700 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden group-hover:translate-y-[-2px] transition-transform duration-300">
      {image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <span className="text-gray-500">No Image</span>
      )}
    </div>
  );

  return (
    <div className="group grid grid-cols-10 gap-x-5 h-fit mb-4 hover:bg-slate-600/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all lg:p-4 rounded-lg">
      <div className="col-span-4 lg:col-span-3 flex flex-col gap-1.5">
        {href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
            {imageContent}
          </Link>
        ) : (
          imageContent
        )}
      </div>
      <div className="col-span-6 lg:col-span-7 flex flex-col gap-2">
        {href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <h3 className="group/title w-fit font-semibold w-fit">
              <span className="animate-underline">
                {title} <ArrowTopRightOnSquareIcon className="inline ml-1 size-4.5 mb-1 group-hover/title:text-slate-300 text-slate-500 delay-200 transition-colors" />
              </span>
            </h3>
          </Link>
        ) : (
          <h3 className="font-semibold text-slate-200 w-fit">{title}</h3>
        )}
        <p className="text-sm">{description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {skills?.map((skill, index) => {
            return (
              <span
                key={index}
                className="hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center whitespace-nowrap bg-pink-800/25 text-xs text-rose-300 font-medium px-2.5 py-1 rounded-full cursor-default"
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;