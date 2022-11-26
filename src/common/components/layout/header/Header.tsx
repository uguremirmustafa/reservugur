import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
        p: 2,
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
