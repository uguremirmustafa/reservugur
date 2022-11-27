import { Box, Button, Typography } from "@mui/material";
import { useUser } from "components/wrappers/user-wrapper";
import type { NextPage } from "next";
import NextLink from "next/link";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <Box sx={{ height: "100%" }}>
      <Typography variant="h1">Welcome back, {user?.name}</Typography>
      <NextLink href="/create-reservation">
        <Button>Create reservation</Button>
      </NextLink>
    </Box>
  );
};

export default Home;
