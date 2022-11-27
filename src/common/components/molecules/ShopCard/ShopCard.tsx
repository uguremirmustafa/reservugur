import {
  ArrowForwardIosOutlined,
  ArrowRightOutlined,
  EmailOutlined,
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
  Typography,
} from "@mui/material";
import { Address, Place, Prisma, User } from "@prisma/client";
import NextLink from "next/link";
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
      <CardActions disableSpacing>
        {/* <IconButton>
          <ArrowRightOutlined />
        </IconButton> */}
        <NextLink href={`/my-shops/${shop.id}`}>
          <Button
            sx={{ marginLeft: "auto" }}
            endIcon={<ArrowForwardIosOutlined />}
          >
            Go to shop
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
