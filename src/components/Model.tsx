import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, AsciiRenderer } from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";

export default function Model({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  const resolution = viewport.width < 6 ? 0.33 : 0.2;

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });
  // mxs.de/textstl/
  // weight = 400?
  // font = ??? on pc i think
  // size = 72?
  // width = 10

  const geometry = useLoader(STLLoader, "/models/output.stl");
  console.log(viewport.width);

  return (
    <>
      <mesh geometry={geometry} scale={viewport.width / 400} ref={meshRef}>
        <meshStandardMaterial color="black" />
      </mesh>
      <OrbitControls enablePan={false} enableZoom={false} />
      <AsciiRenderer
        resolution={resolution}
        invert={false}
        characters=" nj"
        fgColor={isDark ? "white" : "black"}
        bgColor={isDark ? "black" : "white"}
      />
    </>
  );
}
