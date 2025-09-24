import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import HomePage from "./app/HomePage.tsx";
import AboutPage from "./app/AboutPage.tsx";
import NotFoundPage from "./app/NotFoundPage.tsx";
import ProjectsPage from "./app/ProjectsPage.tsx";
import TestPage from "./app/TestPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="test" element={<TestPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
