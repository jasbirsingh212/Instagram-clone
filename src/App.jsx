import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

import PageLayout from "./Layouts/PageLayout/PageLayout.jsx";

import useAuthStore from "./store/authStore.js";

function App() {
  const authUser = useAuthStore((state) => state.user);

  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={!!authUser}>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/:username"
          element={
            <ProtectedRoute isAuthenticated={!!authUser}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </PageLayout>
  );
}

export default App;
