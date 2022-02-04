import TableList from "views/Tables.js";
import UserPage from "views/User.js";
var routes = [
  {
    path: "/userprofile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  }, {
    path: "/users",
    name: "User List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
];
export default routes;
