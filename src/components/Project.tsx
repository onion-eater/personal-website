import { Github, Link } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  livelink?: string;
  stack: string[];
  isDark: boolean;
}
export default function Project({
  title,
  description,
  github,
  livelink,
  stack,
  isDark,
}: ProjectProps) {
  return (
    <div
      className={`border ${
        isDark ? "border-white" : "border-black"
      } p-3 rounded-lg max-w-xl mx-auto my-3 flex-col gap-2`}
    >
      <div className="flex items-start justify-between gap-3">
        <h1
          className={`text-xl font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>

        <div className="flex gap-2 pt-0.5 shrink-0">
          {github && (
            <a
              href={github}
              className={`${
                isDark ? "text-white" : "text-black"
              } hover:text-gray-500`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
          )}

          {livelink && (
            <a
              href={livelink}
              className={`${
                isDark ? "text-white" : "text-black"
              } hover:text-gray-500`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link size={22} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mt-1 mb-2 text-xs">
        {stack.map((tech) => (
          <span
            key={tech}
            className={`px-2 py-0.5 rounded border ${
              isDark
                ? "border-gray-400 text-gray-200"
                : "border-gray-500 text-gray-800"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
    </div>
  );
}
