import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AddRoommate from "../pages/AddRoommate";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";
import RoommateDetails from "../pages/RoommateDetails";
import UpdateRoommates from "../pages/UpdateRoommates";
import PrivateRouts from "../components/PrivateRouts";
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/roommates"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/add-roommate",
        element: (
          <PrivateRouts>
            <AddRoommate></AddRoommate>
          </PrivateRouts>
        ),
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
        loader: () => fetch("http://localhost:3000/roommates/featured"),
                hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseListings,
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRouts>
            <MyListings></MyListings>
          </PrivateRouts>
        ),
      },
      {
        path: "/roommates/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRouts>
            <RoommateDetails></RoommateDetails>
          </PrivateRouts>
        ),
      },
      {
        path: "/roommates/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRouts>
            <UpdateRoommates></UpdateRoommates>
          </PrivateRouts>
        ),
      },
    ],
  },
]);

export default router;
