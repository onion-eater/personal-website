import { Canvas } from "@react-three/fiber";
import { OrbitControls, AsciiRenderer } from "@react-three/drei";
import Navbar from "../components/Navbar";
import Music from "../components/Music";
// import { useNavigate } from "react-router";
import Model from "../components/Model";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <Music />
      </div>
      <div className="relative">
        <Canvas
          className="bg-black w-full h-full"
          style={{ position: "fixed", inset: 0, zIndex: 10 }}
          dpr={1}
        >
          <Model />
          <OrbitControls enablePan={false} enableZoom={false} />
          <AsciiRenderer resolution={0.2} invert={false} characters=" nj" />
          <directionalLight position={[0, 0, 5]} intensity={1.5} />
        </Canvas>
      </div>
    </>
  );
}
