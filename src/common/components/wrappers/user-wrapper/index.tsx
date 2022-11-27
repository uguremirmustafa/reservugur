import { User } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { trpc } from "utils/trpc";
import { useSession, getSession } from "next-auth/react";

type InitialValue = {
  user: User | null | undefined;
  // setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
};

const initialValue: InitialValue = {
  // setUser: () => {},
  user: null,
  loading: true,
};

const UserContext = createContext(initialValue);

export const UserProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  // const [user, setUser] = useState<User | null>(null);
  // console.log({ user });

  const { data: user, isLoading } = trpc.user.getUser.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  return (
    <UserContext.Provider value={{ user, loading: isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUser must be used in a component within a UserProvider"
    );
  }
  return context;
};
