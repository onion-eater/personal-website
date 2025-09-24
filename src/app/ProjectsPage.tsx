import Navbar from "../components/Navbar";
import useLocalStorage from "use-local-storage";

export default function ProjectsPage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-black flex justify-center items-center h-screen w-screen">
        <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
        <p className="text-black dark:text-white">wip twin</p>
      </div>
    </div>
  );
}
