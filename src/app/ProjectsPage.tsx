import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-black flex justify-center items-center h-screen w-screen">
        <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
        <p className="text-black dark:text-white">wip twin</p>
      </div>
    </div>
  );
}
