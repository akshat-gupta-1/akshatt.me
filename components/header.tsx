import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
export function HeaderSection() {
  return (
    <section className="flex gap-x-6 items-center">
      <div className="border border-gray border-dashed rounded-full p-2 w-[75px] h-[75px] flex justify-cneter items-center">
        <div className="rounded-full w-[60px] h-[60px] flex justify-center item-center overflow-hidden">
          <Image src={"/avatar.png"} width={60} height={60} alt="avatar" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-text font-medium">akshat gupta</h4>
        <h6 className="text-accent text-sm">
          student <span className="text-gray">•</span>{" "}
          <span className="text-cyan">dev</span>
        </h6>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-text text-sm hover:text-accent hover:bg-accent/20 bg-gray/20 px-2 py-1 rounded-lg w-fit font-[font-family:var(--font-geist-mono)] group"
        >
          Resume
          <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
