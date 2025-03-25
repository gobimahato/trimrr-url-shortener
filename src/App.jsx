import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/app-layout";
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import RedirectLink from "./pages/redirect-link";
import Link from "./pages/link";

import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
