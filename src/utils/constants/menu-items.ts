import {
  EventAvailableOutlined,
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
  { label: "Home", path: "/", icon: HomeOutlined, isPublic: true },
  {
    label: "My Shops",
    path: "/my-shops",
    icon: StoreOutlined,
    allowedRoles: ["ADMIN"],
  },
  {
    label: "My Reservations",
    path: "/my-reservations",
    icon: EventAvailableOutlined,
  },
];

export const getMenuItems = (user?: User | null) => {
  if (!user) {
    return menuItems.filter((x) => x.isPublic);
  } else {
    return menuItems.filter((x) =>
      x.allowedRoles ? x.allowedRoles.includes(user.role) : true
    );
  }
};
