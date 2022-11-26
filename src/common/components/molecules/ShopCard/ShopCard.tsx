import { EmailOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Address, Place, Prisma, User } from "@prisma/client";
import React from "react";

export type Shop = Place & {
  address: Address | null;
  _count: Prisma.PlaceCountOutputType;
  owner: User;
};

interface IProps {
  shop: Shop;
}

const ShopCard = (props: IProps) => {
  const { shop } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={shop.owner.name}
        avatar={shop.owner.name ? <Avatar>{shop.owner.name[0]}</Avatar> : null}
        action={
          <IconButton aria-label="email" href={`mailto:${shop.owner.email}`}>
            <EmailOutlined />
          </IconButton>
        }
        subheader={shop.owner.email}
      />
      <CardMedia
        component="img"
        height="200"
        image="images/bike_shop1.jpg"
        alt={`bike-shop-${shop.name}`}
      />
      {/* <Divider /> */}
      <CardContent>
        <Typography variant="h2">{shop.name}</Typography>
        <Typography variant="subtitle1">
          {shop._count.Reservation
            ? `Reservation count: ${shop._count.Reservation}`
            : "This shop has no reservation currently!"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShopCard;
