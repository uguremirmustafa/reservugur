import {
  ArrowForwardIosOutlined,
  ArrowRightOutlined,
  EditOutlined,
  EmailOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Place, Reservation, User } from "@prisma/client";
import NextLink from "next/link";
import React from "react";

interface IProps {
  reservation: Reservation & {
    place: Place & {
      owner: User;
    };
    owner: User;
  };
}

const ReservationCard = (props: IProps) => {
  const { reservation } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {};

  return (
    <Card sx={{ minWidth: 275 }}>
      <NextLink href={`/my-reservations/${reservation.id}`}>
        <CardMedia
          component="img"
          height="140"
          image="images/bike_shop1.jpg"
          alt={`bike-shop-${reservation.place.name}`}
          sx={{ cursor: "pointer" }}
        />
      </NextLink>
      <CardHeader
        title={`Reservation at ${reservation.place.name}`}
        titleTypographyProps={{ noWrap: true, maxWidth: "400px" }}
        action={
          <>
            <IconButton aria-label="email" onClick={handleClick}>
              <MoreHorizOutlined />
            </IconButton>
            <Menu
              color="primary"
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              MenuListProps={{ sx: { p: 1 } }}
              transformOrigin={{ horizontal: "center", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <NextLink href="/profile"> */}
              <MenuItem href={`mailto:${reservation.place.owner.email}`}>
                <ListItemIcon>
                  <EmailOutlined />
                </ListItemIcon>
                Email
              </MenuItem>
              {/* </NextLink> */}

              <MenuItem onClick={handleEdit}>
                <ListItemIcon>
                  <EditOutlined />
                </ListItemIcon>
                Update
              </MenuItem>
            </Menu>
          </>
        }
        // subheader={shop.owner.email}
      />
      <CardContent>
        {/* <Typography variant="h2">{reservation.description}</Typography> */}
        <Typography variant="subtitle1" noWrap>
          {reservation.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<EditOutlined />}>Update</Button>
        <Button
          startIcon={<EmailOutlined />}
          href={`mailto:${reservation.place.owner.email}`}
        >
          Email
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReservationCard;
