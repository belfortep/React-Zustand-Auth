import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/auth";

export default function App() {

  const isAuth = useAuthStore(state => state.isAuth)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute isAllowed = {isAuth}/>}>
          <Route path="/profile" element= {<ProfilePage/>}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
