import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

import { MenuItem } from "types";
import { drawerWidth } from "..";
import Link from "next/link";

interface IProps {
  menuItems: MenuItem[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

function Sidebar(props: IProps) {
  const { menuItems, open, setOpen } = props;
  const router = useRouter();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 1,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      ModalProps={{ keepMounted: false, hideBackdrop: true }}
      variant="temporary"
      anchor="left"
      open={open}
    >
      <List>
        {menuItems.map(({ icon, label, path }, index) => (
          <ListItem key={path}>
            <Link href={path}>
              <ListItemButton selected={router.asPath === path}>
                <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
