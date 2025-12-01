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
          My name is <u>Nolan Jiang</u>. I am studying <u>Mathematics</u> at <u>Carnegie Mellon
          University</u>.
        </h1>
        <br></br>
        <h2>Find Me Here:</h2>
        <p><a href="https://www.linkedin.com/in/nolan-jiang" className="underline hover:text-blue-500" target="_blank">Linkedin</a> |{" "}
        <a href="https://www.github.com/onion-eater" className="underline hover:text-blue-500" target="_blank">GitHub</a> |{" "}
        <a href="mailto:nolanjiang@cmu.edu" className="underline hover:text-blue-500" target="_blank">Email</a> |{" "}
        <a href="https://www.instagram.com/jiang_nolan/" className="underline hover:text-blue-500" target="_blank">Instagram</a></p>


      </div>
    </div>
    </div>
  );
}
