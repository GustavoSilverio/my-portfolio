import { createTheme } from "@mui/material";

//Temas pré-definidos
export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "rgba(75,3,31)",
    },
    secondary: {
      main: "rgba(255,0,92,1)",
      dark: "rgba(180,35,87,1)",
    },

    grey: {
      "100": "rgba(255,171,201,1)",
      "200": "rgba(35,6,17,1)",
    },
  },
  typography: {
    allVariants: { fontFamily: "Inter" },
  },
});
