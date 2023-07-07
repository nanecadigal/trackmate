import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
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
    path: '/dashboard',
    element: <Profile />
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
