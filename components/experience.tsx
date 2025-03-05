import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export function ExperienceSection() {
  return (
    <div className="text-text">
      <h4 className="text-text font-medium">Experience</h4>
      <ExperienceTimeline
        items={[
          {
            timestamp: "Nov. 2024 - Feb. 2025",
            role: "Full-stack Engineering Intern",
            company: "Infinite Locus",
            companyLink: "https://www.linkedin.com/company/infinitelocus/",
            description:
              "At Infinite Locus, I developed applications for a leading global consulting firm, focusing on building and maintaining a robust backend with the help of fastest-growing technologies like Python, FastAPI, and MongoDB.",
          },
          {
            timestamp: "Nov. 2023 - Jan. 2024 | May. 2024 - Jul. 2024",
            role: "Frontend Engineering Intern",
            company: "Kaliper Private Limited",
            companyLink: "https://www.linkedin.com/company/kaliper/",
            description:
              "At Kaliper Private Limited, I designed and developed intuitive user interfaces using React and React Native, ensuring seamless integration with the backend for a smooth and responsive experience.",
          },
        ]}
      />
    </div>
  );
}

interface ExperienceItem {
  timestamp: string;
  role: string;
  company: string;
  companyLink: string;
  description: string;
}
function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="my-4">
      {items.map((item, index) => {
        return (
          <div
            className="py-3 border-l-2 border-gray/30 pl-4 relative flex flex-col gap-y-3"
            key={index}
          >
            <div className="absolute -left-1.75 top-[16px] h-3 w-3 rounded-full bg-accent"></div>
            <div className="text-sm text-gray">{item.timestamp}</div>
            <div>
              <h6 className="font-medium">{item.role}</h6>
              <h6>
                <Link
                  href={item.companyLink}
                  className="text-gray text-sm flex items-center hover:text-text group"
                >
                  {item.company}{" "}
                  <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition duration-200 ease-in-out" />
                </Link>
              </h6>
            </div>
            <div className="text-gray text-sm text-pretty">
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
