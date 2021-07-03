// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "داشبورد",
    icon: Dashboard,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "حساب کاربری",
    icon: Person,
    component: UserProfile,
    layout: "/rtl",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "لیست جداول",
    icon: "content_paste",
    component: TableList,
    layout: "/rtl",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "خط",
    icon: LibraryBooks,
    component: Typography,
    layout: "/rtl",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "آیکون ها",
    icon: BubbleChart,
    component: Icons,
    layout: "/rtl",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "نقشه",
    icon: LocationOn,
    component: Maps,
    layout: "/rtl",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "اطلاعیه ها",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/rtl",
  },
];

export default dashboardRoutes;
