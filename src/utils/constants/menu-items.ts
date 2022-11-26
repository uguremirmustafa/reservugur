import {
  Home,
  HomeOutlined,
  HomeRepairService,
  House,
  HouseOutlined,
  HouseRounded,
  Shop,
  Store,
  StoreMallDirectory,
  StoreOutlined,
} from "@mui/icons-material";
import { User } from "@prisma/client";
import { MenuItem } from "types";

const menuItems: MenuItem[] = [
  { label: "Home", path: "/", icon: HomeOutlined },
  {
    label: "My Shops",
    path: "/my-shops",
    icon: StoreOutlined,
    allowedRoles: ["ADMIN"],
  },
];

export const getMenuItems = (user: User) => {
  return menuItems.filter((x) =>
    x.allowedRoles ? x.allowedRoles.includes(user.role) : true
  );
};
