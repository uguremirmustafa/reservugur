import { Grid } from "@mui/material";
import PageTitle from "components/atoms/page-title/PageTitle";
import ReservationCard from "components/molecules/reservation-card/ReservationCard";
import React from "react";
import { trpc } from "utils/trpc";

const MyReservations = () => {
  const { data: reservations } = trpc.reservation.getAll.useQuery();

  return (
    <div>
      <PageTitle>My Reservations</PageTitle>
      <Grid container spacing={2}>
        {reservations?.map((reservation) => {
          return (
            <Grid item sm={12} md={12} lg={6} xl={4} key={reservation.id}>
              <ReservationCard reservation={reservation} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MyReservations;
