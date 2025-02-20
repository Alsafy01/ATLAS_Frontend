import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import AIAssistant from "./pages/AIAssistant";
import Certificates from "./pages/Certificates";
import CertificateManagement from "./pages/admin/CertificateManagement";
import CertificateIssuing from "./pages/admin/CertificateIssuing";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route
              path="/admin/certificates"
              element={<CertificateManagement />}
            />
          </Routes>
          <Routes>
            <Route
              path="/admin/certificates/issue"
              element={<CertificateIssuing />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
