import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import CreateInsurancePage from './pages/CreateInsurancePage';
import ManagePackagesPage from './pages/ManagePackagesPage';
import ViewClaimsPage from './pages/ViewClaimsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Grouped routes for better readability
const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/dashboard', element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
  { path: '/packages', element: <ProtectedRoute><ManagePackagesPage /></ProtectedRoute> },
  { path: '/packages/create', element: <ProtectedRoute><CreateInsurancePage /></ProtectedRoute> },
  { path: '/claims', element: <ProtectedRoute><ViewClaimsPage /></ProtectedRoute> },
  { path: '/analytics', element: <ProtectedRoute><AnalyticsPage /></ProtectedRoute> },
  { path: '/profile', element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
  { path: '*', element: <NotFoundPage /> },
];

function App() {
  const { currentUser } = useAuth();

  // Add class to body for dark mode detection
  useEffect(() => {
    document.body.classList.add('bg-gray-50', 'bg-neutral-800');
    document.documentElement.classList.add('scroll-smooth');
    
    return () => {
      document.body.classList.remove('bg-gray-50', 'bg-neutral-800');
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;