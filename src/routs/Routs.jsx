import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AddRoommate from "../pages/AddRoommate";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path:"/add-roommate",
        Component:AddRoommate,
      },
      {
        path:"/login",
        Component:Login,
      },
      {
        path:"/signup",
        Component:SignUp,
      },
      {
        path:"/browse-listings",
        Component:BrowseListings,
      },
      {
        path:"/my-listings",
        Component:MyListings,
      },
      
    ],
  },
]);
export default router;
