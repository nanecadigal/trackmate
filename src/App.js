import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Landing from "./pages/static/Landing";
import Dashboard from "./layouts/Dashboard";
import Employees from "./pages/auth/Employees";
import Timecards from "./pages/auth/Timecards";
import Location from "./pages/auth/Location";
import Reports from "./pages/auth/Reports";
import Schedules from "./pages/auth/Schedules";

import UnauthenticatedRoutes from "./utils/UnAuthorized";
import AuthenticatedRoutes from "./utils/Authorized";
import Overview from "./pages/auth/Overview";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/app/",
    element: <Dashboard />,
    private: true,
    admin: true,
    children: [
      {
        path: "overview",
        element: <Overview />,
        private: true,
        admin: true,
      },
      {
        path: "employees",
        element: <Employees />,
        private: true,
        admin: true,
      },
      {
        path: "location",
        element: <Location />,
        private: true,
        admin: true,
      },
      {
        path: "timecards",
        element: <Timecards />,
        private: true,
        admin: true,
      },
    ],
  },
  {
    path: "/schedule",
    element: <Schedules />,
    private: true,
    admin: false,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes>
        <UnauthenticatedRoutes
          path="/"
          restricted={false}
          element={<Landing />}
        />
        <UnauthenticatedRoutes
          path="/login"
          restricted={true}
          element={<Login />}
        />
        <UnauthenticatedRoutes
          path="/register"
          restricted={true}
          element={<Register />}
        />
        <AuthenticatedRoutes
          path="/app/*"
          private={true}
          admin={true}
          element={<Dashboard />}
        >
          <Route path="app/overview" element={<Overview />} />
          <Route path="app/employees" element={<Employees />} />
          <Route path="app/timecards" element={<Timecards />} />
          <Route path="app/reports" element={<Reports />} />
        </AuthenticatedRoutes>
      </Routes>
    </RouterProvider>
  );
}

export default App;