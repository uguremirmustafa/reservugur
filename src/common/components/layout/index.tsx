import { Box } from "@mui/material";
import { useUser } from "components/wrappers/user-wrapper";
import React, { ReactNode, useState } from "react";
import { getMenuItems } from "utils/constants";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface IProps {
  children: ReactNode;
}
export const drawerWidth = 240;

function Layout(props: IProps) {
  const { children } = props;
  const [open, setOpen] = useState(true);

  const { user } = useUser();
  const menuItems = user ? getMenuItems(user) : [];

  return (
    <Box sx={{ position: "relative" }}>
      <Sidebar menuItems={menuItems} open={open} setOpen={setOpen} />
      <Box
        sx={{
          paddingLeft: open ? `${drawerWidth}px` : 0,
          transition: "padding ease .3s",
        }}
      >
        <Header open={open} setOpen={setOpen} />
        <Box component="main" p={2}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
