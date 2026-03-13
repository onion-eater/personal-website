import useLocalStorage from "use-local-storage";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);

  return (
    <div className={isDark ? "dark" : ""}>
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
        <h1>
          My name is <u>Nolan Jiang</u>.
        </h1>


      </div>
    </div>
    </div>
  );
}
