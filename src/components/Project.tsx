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
    // border, padding, rounded corners, max width, centered
    
    <div
      className={`border ${
        isDark ? "border-white" : "border-black"
      } p-4 rounded-lg max-w-md mx-auto my-4 flex-col`}
    >
      {/* <h1>hi {github} {livelink}</h1> */}
      <div className="flex items-center justify-between">
        <h1
          className={`text-2xl font-bold mb-2 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>

        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              className={`${
                isDark ? "text-white" : "text-black"
              } hover:text-gray-500`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={30} />
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
              <Link size={30} />
            </a>
          )}
        </div>
      </div>
      {/* <h2 className={`${
            isDark ? "text-white" : "text-black"
        }`}>
        Built with: React, TypeScript, Tailwind CSS
      </h2> */}
      <div className="flex flex-wrap gap-2 mt-1 mb-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className={`px-2 py-1 text-sm rounded-md border ${
              isDark
                ? "border-gray-400 text-gray-200"
                : "border-gray-500 text-gray-800"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
    </div>
  );
}
