import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";

import Home from "../components/Home/Home";
import Question from "../components/Question/Question";
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
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "Courses",
        element: <Courses></Courses>,
      },
      {
        path: "/question",
        element: <Question></Question>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
