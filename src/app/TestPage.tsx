import { useState } from "react";

export default function TestPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-black w-screen h-screen flex gap-3 justify-center items-center">
        <button
          className="cursor-pointer px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsDark(true)}
        >
          dark
        </button>
        <button
          className="cursor-pointer px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsDark(false)}
        >
          light
        </button>
      </div>
    </div>
  );
}