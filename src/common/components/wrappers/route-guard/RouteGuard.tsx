import FullPageSpinner from "components/molecules/full-page-spinner/FullPageSpinner";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getMenuItems } from "utils/constants";
import { useUser } from "../user-wrapper";

interface IProps {
  children: JSX.Element;
}

const RouteGuard = (props: IProps) => {
  const { children } = props;
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in

    const path = url.split("?")[0] ?? "/";
    // if (!user && !publicPaths.includes(path ?? "")) {
    //   setAuthorized(false);
    //   router.push("/");
    // } else if(getMen){
    //   setAuthorized(true);
    // }
    const publicPaths = getMenuItems().map((x) => x.path);

    if (!user) {
      // public routes
      if (publicPaths.includes(path)) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push("/");
      }
    } else {
      const authorizedPathsForUser = getMenuItems(user).map((x) => x.path);
      if (authorizedPathsForUser.includes(path)) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push("/");
      }
    }
  }

  return authorized ? (
    children
  ) : (
    <>
      <FullPageSpinner />
    </>
  );
};

export default RouteGuard;
