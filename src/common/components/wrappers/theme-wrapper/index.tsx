import { createContext, ReactNode, useContext, useState } from "react";
import Theme from "./Theme";
import { PaletteMode, Paper } from "@mui/material";

interface InitialValues {
  theme: PaletteMode;
  setTheme: (value: PaletteMode | ((val: PaletteMode) => PaletteMode)) => void;
}

const initialValues: InitialValues = { theme: "dark", setTheme: () => {} };

const ThemeContext = createContext(initialValues);

export const ThemeProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [theme, setTheme] = useState(initialValues.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme mode={theme}>
        {/* <Paper
          data-theme={theme}
          style={{ minHeight: "100vh", height: "100%" }}
        > */}
        {children}
        {/* </Paper> */}
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme must be used in a component within a ThemeProvider"
    );
  }
  return context;
};
