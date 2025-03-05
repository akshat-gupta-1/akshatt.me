import { ArrowUpRight } from "lucide-react";
const links = [
  {
    name: "Github",
    url: "https://github.com/akshat-gupta-1",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/akshat-gupta-8a8017286/",
  },
  {
    name: "Mail",
    url: "mailto:akshatgupta1408@gmail.com",
  },
];
export function LinksSection() {
  return (
    <section className="flex flex-col gap-y-4">
      <h4 className="text-text font-medium">Connect</h4>
      <div className="flex gap-x-4">
        {links.map((link, index) => {
          return (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2 text-text text-sm"
              key={index}
            >
              <span className="font-medium flex items-center group hover:text-accent">
                {link.name}{" "}
                <ArrowUpRight className="mr-1 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:text-accent transition duration-200 ease-in-out" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
