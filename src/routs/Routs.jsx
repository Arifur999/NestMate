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
import ErrorPage from "../components/ErrorPage";
import ContactUs from "../pages/contactUs";
import AboutUs from "../pages/AboutUs";
import LayOut from "../layout/LayOut";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://assingment-10-server-gold.vercel.app/roommates"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
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
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/browse-listings",
        loader: () =>
          fetch(
            "https://assingment-10-server-gold.vercel.app/roommates/featured"
          ),
        hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseListings,
      },
      {
        path: "/roommates/:id",
        loader: ({ params }) =>
          fetch(
            `https://assingment-10-server-gold.vercel.app/roommates/${params.id}`
          ),
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
          fetch(
            `https://assingment-10-server-gold.vercel.app/roommates/${params.id}`
          ),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRouts>
            <UpdateRoommates></UpdateRoommates>
          </PrivateRouts>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    Component: LayOut,
    children: [
      {
        path: "/dashboard",
        Component: DashboardHome,
      },
      {
        path: "/dashboard/my-listings",
        element: (
          <PrivateRouts>
            <MyListings></MyListings>
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/add-roommate",
        element: (
          <PrivateRouts>
            <AddRoommate></AddRoommate>
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/dashboard-home",
        element: (
          <PrivateRouts>
            <DashboardHome></DashboardHome>
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRouts>
            <Profile></Profile>
          </PrivateRouts>
        ),
      },
    ],
  },
]);

export default router;
