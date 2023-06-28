import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profiles from "./components/dashboard/Profiles";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Landing Page</div>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard/user',
    element: <Profiles />
  }
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
