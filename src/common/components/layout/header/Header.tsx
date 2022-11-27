import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { headerHeight } from "..";
import ProfileButton from "./ProfileButton";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

function Header(props: IProps) {
  const { open, setOpen } = props;

  const handleToggle = () => {
    setOpen((old) => !old);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        height: headerHeight,
      }}
    >
      <IconButton color="primary" onClick={handleToggle}>
        <Menu />
      </IconButton>
      <ProfileButton />
    </Box>
  );
}

export default Header;
