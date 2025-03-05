import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-y-4">
      <h4 className="text-text font-medium">Projects</h4>
      <ProjectCard
        items={[
          {
            title: "campcode (leetcode tracker)",
            description:
              "An application to track leetcode problems and solutions and provide useful insights.",
            liveLink: "",
            githubLink: "https://github.com/akshat-gupta-1/CampCode",
            tags: [
              {
                name: "Next.js",
                imageUrl: "/nextjs_icon_dark.svg",
              },
              {
                name: "T3 Stack",
                imageUrl: "/t3-light.svg",
              },
              {
                name: "Prisma",
                imageUrl: "/prisma_dark.svg",
              },
            ],
          },
          {
            title: "wonderbuy ecommerce",
            description:
              "An ecommerce website where you can create your own store and sell your products.",
            liveLink: "https://wonder-buy.vercel.app/",
            githubLink:
              "https://github.com/akshat-gupta-1/WonderBuy-Ecommerce-App",
            tags: [
              {
                name: "Typescript",
                imageUrl: "/typescript.svg",
              },
              {
                name: "React",
                imageUrl: "/react_dark.svg",
              },
              {
                name: "Express.js",
                imageUrl: "/expressjs_dark.svg",
              },
            ],
          },
        ]}
      />
    </section>
  );
}
interface ProjectCardProps {
  items: {
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    tags: {
      name: string;
      imageUrl: string;
    }[];
  }[];
}
function ProjectCard({ items }: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6">
      {items.map((item, index) => {
        return (
          <div
            className="p-4 flex flex-col gap-y-2 border border-dashed border-gray rounded-xl"
            key={index}
          >
            <div className="flex justify-between items-center">
              <Link
                href={item.liveLink}
                className="text-text flex items-center group"
              >
                <h6 className=" font-medium group-hover:underline group-hover:decoration-dotted group-hover:decoration-accent group-hover:underline-offset-4">
                  {item.title}
                </h6>
                <ArrowUpRight className="w-4 h-4 ml-1 text-gray group-hover:translate-x-0.5 group-hover:text-accent transition duration-200 ease-in-out" />
              </Link>
              <Link href={item.githubLink}>
                <Image
                  width={20}
                  height={20}
                  src={"/github.svg"}
                  alt="github"
                />
              </Link>
            </div>
            <p className="text-gray text-sm">{item.description}</p>
            <div className="flex gap-x-2">
              {item.tags.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-x-2 w-fit py-1 px-2 text-xs text-text font-[font-family:var(--font-geist-mono) bg-gray/15 border border-gray/40 rounded-lg"
                    key={index}
                  >
                    <Image
                      src={item.imageUrl}
                      width={13}
                      height={13}
                      alt="tag"
                    />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
