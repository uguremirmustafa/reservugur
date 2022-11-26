// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import Layout from "../common/components/layout";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "components/wrappers/theme-wrapper";
import { UserProvider } from "components/wrappers/user-wrapper";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <ThemeProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
