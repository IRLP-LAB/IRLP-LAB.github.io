import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import HomePage from "./pages/home";
import CurrentPeoplePage from "./pages/people/current";
import AlumniPage from "./pages/people/alumni";
import ResearchProjectsPage from "./pages/research/projects";
import ResearchResourcesPage from "./pages/research/resources";
import PublicationsPage from "./pages/publications/list";
import EventsPage from "./pages/affairs/events";
import GalleryPage from "./pages/affairs/gallery";
import MediaCoveragePage from "./pages/affairs/mediaCoverage";
import ContactPage from "./pages/contact";

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/people/current" element={<CurrentPeoplePage />} />
            <Route path="/people/alumni" element={<AlumniPage />} />
            <Route path="/research/projects" element={<ResearchProjectsPage />} />
            <Route path="/research/resources" element={<ResearchResourcesPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/media-coverage" element={<MediaCoveragePage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
