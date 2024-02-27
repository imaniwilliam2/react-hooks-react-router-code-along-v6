import Home from "./pages/Home";
import About from "./components/About";
import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage"

const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />

    }
  ]

  export default routes
