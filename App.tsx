import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '@/components/AppShell';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import NewScan from '@/pages/NewScan';
import ScanResults from '@/pages/ScanResults';
import Findings from '@/pages/Findings';
import Reports from '@/pages/Reports';
import About from '@/pages/About';
import ThreatIntel from '@/pages/ThreatIntel';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AppShell />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-scan" element={<NewScan />} />
            <Route path="/results/:id" element={<ScanResults />} />
            <Route path="/findings" element={<Findings />} />
            <Route path="/findings/:id" element={<Findings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/threat-intel" element={<ThreatIntel />} />

            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
