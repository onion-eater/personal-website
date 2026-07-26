import { Canvas } from "@react-three/fiber";

import useLocalStorage from "use-local-storage";

import Navbar from "../components/Navbar";
import Model from "../components/Model";

export default function HomePage() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", true);
  // const { viewport } = useThree();

  return (
    <div>
      <Navbar isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
      {/* <Music isDark={isDark} /> */}
      {!document.createElement("canvas").getContext("webgl2") && <div className={`fixed inset-0 z-20 flex items-center justify-center ${isDark ? "text-white" : "text-black"}`}>the site is broken :( enable gpu acceleration</div>}
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
