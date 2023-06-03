import { Typography } from "@mui/material";
import * as Styled from "./Header.styled";
import { NavLink } from "react-router-dom";
import { useMobileMenuContext } from "../../contexts/MobileMenuContext";
import { useTheme, useMediaQuery } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const { setShowMenu } = useMobileMenuContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleContact() {
    const mensagemUrl = "Olá, tudo bem? Gostaria de fazer um orçamento!";
    const mensagemUrlFiltrada = window.encodeURIComponent(mensagemUrl);

    window.open(
      `https://api.whatsapp.com/send?phone=5511943352341&text=${mensagemUrlFiltrada}`
    );
  }

  return (
    <Styled.Header>
      <Typography variant="h1"> GO_ </Typography>
      {!isMobile ? (
        <Styled.Navigation>
          <li>
            <NavLink to="/">about me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>

          <li>
            <button onClick={() => handleContact()}>contact</button>
          </li>
        </Styled.Navigation>
      ) : (
        <Styled.Navigation>
          <span onClick={() => setShowMenu(true)}>
            <GiHamburgerMenu />
          </span>
        </Styled.Navigation>
      )}
    </Styled.Header>
  );
};
