import Music from "../components/Music";
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return(
    <>
    <Navbar /> 
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <Music />
    </div>
    </>
  );
}