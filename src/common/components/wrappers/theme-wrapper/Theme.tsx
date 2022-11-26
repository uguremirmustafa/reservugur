import { PaletteMode } from "@mui/material";
import {
  amber,
  blueGrey,
  deepOrange,
  deepPurple,
  grey,
} from "@mui/material/colors";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import React, { ReactNode } from "react";

/* eslint-disable-next-line */
export interface ThemeProps {
  children: ReactNode;
  mode: PaletteMode;
}

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: amber,
            secondary: amber,
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: amber,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  };
};
const themeWithoutPalette: Omit<ThemeOptions, "palette"> = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0e0e0e",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 6,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  typography: {
    h2: {
      fontSize: 24,
    },
  },
};

export function Theme(props: ThemeProps) {
  const { children, mode } = props;

  const theme = React.useMemo(
    () => createTheme({ ...getDesignTokens(mode), ...themeWithoutPalette }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
