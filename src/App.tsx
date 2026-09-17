import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { SkillGap } from './pages/student/SkillGap';
import { Internships } from './pages/student/Internships';
import { IndustryDashboard } from './pages/industry/IndustryDashboard';
import { AcademicDashboard } from './pages/academic/AcademicDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/skill-gap" element={<SkillGap />} />
        <Route path="/student/internships" element={<Internships />} />
        <Route path="/student/*" element={<Navigate to="/student/dashboard" replace />} />

        {/* Other Portals */}
        <Route path="/industry/dashboard" element={<IndustryDashboard />} />
        <Route path="/industry/*" element={<Navigate to="/industry/dashboard" replace />} />

        <Route path="/academic/dashboard" element={<AcademicDashboard />} />
        <Route path="/academic/*" element={<Navigate to="/academic/dashboard" replace />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
