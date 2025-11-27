import Navbar from "../components/Navbar";
import Project from "../components/Project";

import useLocalStorage from "use-local-storage";

export default function ProjectsPage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen w-full">
        <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
        <div className="max-w-5xl mx-auto px-6 py-24 space-y-10">
          <Project
            isDark={isDark}
            title="Personal Website"
            description="This website :)"
            stack={[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Three.js",
              "Vite",
              "Git",
              "Vercel",
            ]}
            github="https://github.com/onion-eater/personal-website"
            livelink="https://nolanjiang.com"
          />
          <Project
            isDark={isDark}
            title="Zenith"
            description="Chrome extension that blocks reels/other distractions on Instagram. Interactive and responsive UI built with HTML, CSS, and JavasScript."
            stack={[
              "HTML",
              "JavaScript",
              "CSS",
              "Chrome Extensions API",
              "Git",
            ]}
            github="https://github.com/onion-eater/awesome-reels-blocker"
            livelink=""
          />
          <Project
            isDark={isDark}
            title="beep boop"
            description="Multi-utility Discord bot deployed across 10+ servers with 300+ active users. Integrated with Hypixel API using HTTP Requests and JSON parsing to fetch and display real-time stats. Implemented uptime monitoring and error handling."
            stack={["Python", "Discord.py", "HTTP Requests", "JSON", "APIs"]}
            github=""
            livelink=""
          />
        </div>
      </div>
    </div>
  );
}
