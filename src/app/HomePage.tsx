import { Canvas } from "@react-three/fiber";
import { OrbitControls, AsciiRenderer } from "@react-three/drei";

import useLocalStorage from "use-local-storage";

import Navbar from "../components/Navbar";
import Music from "../components/Music";
import Model from "../components/Model";


export default function HomePage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);

  return (
    <div>
      <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      <Music isDark={isDark} />
      <Canvas
        className={`${isDark ? "bg-black" : "bg-white"} w-full h-full`}
        style={{ position: "fixed", inset: 0, zIndex: 10 }}
        dpr={1}
      >
        <Model />
        <OrbitControls enablePan={false} enableZoom={false} />
        <AsciiRenderer
          resolution={0.2}
          invert={false}
          characters=" nj"
          fgColor={isDark ? "white" : "black"}
          bgColor={isDark ? "black" : "white"}
        />
        <directionalLight position={[0, 0, 5]} intensity={1.5} />
      </Canvas>
    </div>
  );
}
