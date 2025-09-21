import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });
  // mxs.de/textstl/ 
  // weight = 400?
  // font = ??? on pc i think
  // size = 72?
  // width = 10
  
  const geometry = useLoader(STLLoader, "/models/output.stl");

  return (
    <mesh geometry={geometry} scale={viewport.width / 400} ref={meshRef}>
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

