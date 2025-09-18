import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });
  const geometry = useLoader(STLLoader, "/models/output.stl");

  return (
    <mesh geometry={geometry} scale={viewport.width / 400} ref={meshRef}>
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default Model;
