import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import LoginPage from "./Login.tsx";
import Home from "./Home.tsx";
import UsersPage from "./UserPage.tsx";
import Dashboard from "./components/admin/Dashboard.tsx";
import BlogPage from "./Blog.tsx";
import Categories from "./Categories.tsx";

const client = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/home", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <Categories />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
