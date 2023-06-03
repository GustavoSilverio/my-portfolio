import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MobileMenu = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  backdropFilter: "blur(10px)",

  zIndex: 9999,
  padding: theme.spacing(4),
  transition: "opacity .7s ease, visibility .7s ease, transform .7s ease",
  display: "flex",

  flexDirection: "column",
  opacity: 0,
  visibility: 'hidden',
  transform: 'translate(-100%)',
  
  "&.active": {
	opacity: 1,
	visibility: 'visible',
	transform: 'translate(0)',
  },

  ".title": {
    justifyContent: "space-between",

    h1: {
      fontSize: 36,
      color: theme.palette.grey[100],
      fontWeight: 700,
      cursor: "pointer",
      transition: "color .4s ease",
      fontFamily: "var(--header-font)",

      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },

    button: {
      backgroundColor: "transparent",
      border: "none",

      span: {
        color: theme.palette.grey[100],
        fontSize: 50,
        transition: "color .4s ease",

        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },
  },

}));

export const NavigationWrapper = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  flexDirection: "column",
  justifyContent: "center",

  alignItems: "flex-start",
  margin: "auto",
  color: theme.palette.grey[100],

  li: {
    listStyle: "none",

    "a, button": {
      color: theme.palette.grey[100],
      backgroundColor: "transparent",
      border: "none",
      textDecoration: "none",

      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1.5),
      padding: theme.spacing(2),
      transition: "color .2s ease",

      "&:hover": {
        color: theme.palette.secondary.main,
      },

      p: {
        fontSize: 24,
        fontWeight: 700,
      },

      span: {
        display: "flex",
        fontSize: 30,
      },
    },
  },
}));
