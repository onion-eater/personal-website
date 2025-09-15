import { Canvas } from "@react-three/fiber";
import { OrbitControls, AsciiRenderer } from "@react-three/drei";
// import { useNavigate } from "react-router";
import Model from "../components/Model";

function HomePage() {
  // const navigate = useNavigate();

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }} dpr={1}>
        <Model />
        <OrbitControls enablePan={false} enableZoom={false} />
        <AsciiRenderer resolution={0.2} invert={false} characters=" n" />
      </Canvas>
      {/* <div
        style={{
          display: "flex",
          gap: "20px",
          position: "absolute",
          zIndex: 10,
          left: "50%",
          top: "70%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button onClick={() => navigate("/about")}>About</button>
        <button>Projects</button>
      </div> */}
      {/* <div className="line"></div> */}
    </div>
  );
}

export default HomePage;
