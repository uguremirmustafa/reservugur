import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import NextLink from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

export function ProfileButton() {
  //   const { user } = useUser();
  const { data: sessionData } = useSession();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut();
  };

  if (!sessionData?.user) {
    return <Button onClick={() => signIn()}>Login</Button>;
  }

  return (
    <>
      <Button variant="text" endIcon={<ExpandMoreIcon />} onClick={handleClick}>
        {renderAvatar(sessionData?.user, 32)}
        <Typography
          sx={{
            pl: 2,
            m: 0,
            textTransform: "capitalize",
          }}
        >
          {sessionData?.user?.name}
        </Typography>
      </Button>
      <Menu
        color="primary"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{ sx: { p: 0 } }}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: 200,
            overflow: "visible",
            filter: "drop-shadow(0px -2px 10px rgba(0,0,0,0.2))",
            mt: 1.5,
            p: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <NextLink href="/profile">
          <MenuItem>
            {renderAvatar(sessionData?.user, 14)}{" "}
            <Typography variant="body1" color="primary">
              Profile
            </Typography>
          </MenuItem>
        </NextLink>

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileButton;

const renderAvatar = (user: Session["user"], size?: number) => {
  return (
    <Avatar
      sx={{ width: size ?? 24, height: size ?? 24 }}
      alt={user?.name ?? "avatar"}
      src={user?.image ?? "https://mui.com/static/images/avatar/2.jpg"}
    >
      {user?.name ? user?.name[0] : ""}
    </Avatar>
  );
};
