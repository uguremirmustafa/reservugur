import { User } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { trpc } from "utils/trpc";

type InitialValue = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialValue: InitialValue = {
  setUser: () => {},
  user: null,
};

const UserContext = createContext(initialValue);

export const UserProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  trpc.user.getUser.useQuery(undefined, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
