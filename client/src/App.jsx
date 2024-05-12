import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import Layout from "./pages/Layout";
import Login from "./pages/loginlayout/Login";
import ForgotPassword from "./pages/loginlayout/ForgotPassword";
import ResetPassword from "./pages/loginlayout/ResetPassword";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Settings/Settings";
import SearchPage from "./pages/Search/SearchPage";
import Landing from "./pages/Landing/Landing";
import ThemeProvider from "./theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="appointments" element={<SearchPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
