import Image from "next/image";
import { MapPin } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 font-[var(--font-geist-sans)]">
      <div className="flex gap-x-6 items-center">
        <div className="border border-gray border-dashed rounded-full p-2 w-[75px] h-[75px] flex justify-cneter items-center">
          <div className="rounded-full w-[60px] h-[60px] flex justify-center item-center overflow-hidden">
            <Image src={"/avatar.png"} width={60} height={60} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-text font-medium">akshat gupta</h4>
          <h6 className="text-accent text-sm">student • dev</h6>
          <h6 className="text-gray text-sm flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            new delhi, india
          </h6>
        </div>
      </div>
      <div className="max-w-2xl text-gray leading-relaxed">
        I'm a <span className="italic text-cyan">Full-stack Engineer</span> who
        loves building web applications and exploring new technologies. I enjoy
        writing code in typescript, python and go. When I'm not coding, I love
        to play video games or binge watching shows on netflix.
      </div>
    </div>
  );
}
