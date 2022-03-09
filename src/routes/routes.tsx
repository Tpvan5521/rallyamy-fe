import * as React from "react";
import { Suspense } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";

import PageLayout from "components/Layout";
import PageLoader from "components/Loader/PageLoader";
const HomePage = React.lazy(() => import("pages/Home"))
const ProfilePage = React.lazy(() => import("pages/Profile"))
const LoginPage = React.lazy(() => import("pages/Login"))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <AuthProvider>
          <Routes>
            <Route element={<PageLayout useAuth={useAuth} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage useAuth={useAuth} />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <ProfilePage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
