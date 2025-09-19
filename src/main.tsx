import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
// import AboutPage from "./pages/AboutPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="about" element={<AboutPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
