import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

import SingleChef from "../components/SingleChef/SingleChef";
import FoodDetails from "../components/FoodDetails/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "chef/:id",
        element: <SingleChef />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "food/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
    ],
  },
]);
export default router;
