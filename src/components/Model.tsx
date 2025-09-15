import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });
  const geometry = useLoader(STLLoader, "/models/output.stl");

  return (
    <mesh geometry={geometry} scale={0.03} ref={meshRef}>
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default Model;
