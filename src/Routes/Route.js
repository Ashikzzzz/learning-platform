import Blog from "../components/Blog/Blog";
import ChackOut from "../components/ChackOut/ChackOut";
// import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import Details from "../components/Details/Details";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Question from "../components/Question/Question";
import Register from "../components/Register/Register";
import Main from "../screen/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "/category/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/course/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/question",
        element: <Question></Question>,
      },
      {
        path: "/chackout/:id",
        element: (
          <PrivateRoute>
            <ChackOut></ChackOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
