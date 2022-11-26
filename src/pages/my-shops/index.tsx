import { Grid } from "@mui/material";
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
    <Grid container>
      {shops?.map((shop) => {
        return (
          <Grid item sm={12} md={6} lg={4}>
            <ShopCard shop={shop} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ShopsPage;
