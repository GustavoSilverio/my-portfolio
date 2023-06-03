import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4, 19, 1.25),
  backgrouncColor: "transparent",
  flexDirection: "row",

  alignItems: "center",
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

  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
    padding: theme.spacing(4, 5),

    span: {
      fontSize: 30,
      display: "flex",
      color: theme.palette.grey[100],
      transition: "color .4s ease",

      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export const Navigation = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  listStyle: "none",

  "li a, li button": {
    color: theme.palette.grey[100],
    textDecoration: "none",
    position: "relative",

    "&::before": {
      content: "''",
      height: 1,
      width: 0,
      bottom: -3,

      backgroundColor: theme.palette.secondary.main,
      position: "absolute",
      left: "50%",
      display: "block",

      transform: "translateX(-50%)",
      transition: "width .4s ease",
    },

    "&:hover::before": {
      width: "55%",
    },
  },

  "li button": {
    backgroundColor: "transparent",
    border: "none",
    color: theme.palette.grey[100],
    fontSize: 16,
    cursor: "pointer",
  },
}));
