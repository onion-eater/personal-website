import Navbar from "../components/Navbar";
import { useState } from "react";

export default function NotFoundPage() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      <div className="bg-white text-black dark:bg-black min-h-screen flex flex-col items-center justify-center dark:text-white">
        <h1>not foudn twin: could be wip</h1>
      </div>
    </div>
  );
}
