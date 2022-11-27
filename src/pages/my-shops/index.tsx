import { Grid } from "@mui/material";
import PageTitle from "components/atoms/page-title/PageTitle";
import ShopCard from "components/molecules/ShopCard/ShopCard";
import type { NextPage } from "next";
import { trpc } from "utils/trpc";

const ShopsPage: NextPage = () => {
  const { data: shops } = trpc.place.getAll.useQuery(undefined, {
    refetchOnMount: false,
  });

  if (!shops) {
    return <>loading</>;
  }

  return (
    <>
      <PageTitle>My Shops</PageTitle>

      <Grid container>
        {shops?.map((shop) => {
          return (
            <Grid key={shop.id} item sm={12} md={6} lg={4}>
              <ShopCard shop={shop} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ShopsPage;
