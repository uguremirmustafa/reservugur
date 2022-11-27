import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const ShopDetailsPage: NextPage = () => {
  const router = useRouter();
  const { shopId } = router.query;

  return <div>{shopId}</div>;
};

export default ShopDetailsPage;
