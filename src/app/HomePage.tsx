import { Canvas } from "@react-three/fiber";

import useLocalStorage from "use-local-storage";

import Navbar from "../components/Navbar";
import Music from "../components/Music";
import Model from "../components/Model";

export default function HomePage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);
  // const { viewport } = useThree();

  return (
    <div>
      <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      <Music isDark={isDark} />
      <Canvas
        className={`${isDark ? "bg-black" : "bg-white"} w-full h-full`}
        style={{ position: "fixed", inset: 0, zIndex: 10 }}
        dpr={1}
      >
        <Model isDark={isDark} />
        <directionalLight position={[0, 0, 5]} intensity={1.5} />
      </Canvas>
    </div>
  );
}
