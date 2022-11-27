import PageTitle from "components/atoms/page-title/PageTitle";
import { useRouter } from "next/router";
import React from "react";
import { trpc } from "utils/trpc";

const ReservationDetails = () => {
  // TODO: learn how to type query parameters
  const router = useRouter();
  const reservationId = router.query?.reservationId as string;

  const { data: reservation } = trpc.reservation.getById.useQuery({
    reservationId,
  });
  return (
    <div>
      <PageTitle>Reservation Details - {reservation?.id}</PageTitle>
      <pre>{JSON.stringify(reservation, null, 2)}</pre>
    </div>
  );
};

export default ReservationDetails;
