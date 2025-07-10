import { cn } from "@lib/utils";
import Image from "next/image";

interface IHeadshotProps {
  alt: string;
    className?: string;
}
export function Headshot({ alt, className }: IHeadshotProps) {
  return (
    <Image
      className={cn(className)}
      src={`/headshot.svg`}
      alt={alt}
      width="64"
      height="64"
    />
  );
}
