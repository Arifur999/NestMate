import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AddRoommate from "../pages/AddRoommate";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";
import RoommateDetails from "../pages/RoommateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/roommates"),
        Component: Home,
      },
      {
        path: "/add-roommate",
        Component: AddRoommate,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/browse-listings",
        loader: () => fetch("http://localhost:3000/roommates"),
        Component: BrowseListings,
      },
      {
        path: "/my-listings",
        Component: MyListings,
      },
      {
        path: "/roommates/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
        Component: RoommateDetails,
      },
    ],
  },
]);

export default router;
