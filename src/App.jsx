import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/testPage";
import { Toaster } from "react-hot-toast";
import AddProductPage from "./pages/admin/addProductPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const ClientId =
    "454704357887-cirshapfhvtvve3en4q0svo5q53kbcec.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <BrowserRouter>
        <div>
          <Toaster position="top-right" />
          {/*<Headers /> */}
          <Routes path="/*">
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/testing/*" element={<TestPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

//https://cschwfhbuvxlegdggmsu.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzY2h3ZmhidXZ4bGVnZGdnbXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODc0MjksImV4cCI6MjA2MjQ2MzQyOX0.tKzAshkDhdz9LODu4iXW9DJCQK3FeY3bZTjLcZY6kmU
